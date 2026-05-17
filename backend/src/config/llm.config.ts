import { AiSdkLlm } from '@iqai/adk';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from './env.config';
import { zgInferenceService } from '../services/0g-inference.service';

const customFetch = async (url: string, options: any) => {
  let newUrl = url;
  if (url.includes('/responses')) {
    newUrl = url.replace('/responses', '/chat/completions');
  }

  if (options.method === 'POST' && options.body) {
    try {
      let body = JSON.parse(options.body);

      if (body.input && !body.messages) {
        body.messages = body.input;
        delete body.input;
      }

      if (body.messages) {
        body.messages = body.messages.map((msg: any) => {
          if (Array.isArray(msg.content)) {
            const hasImages = msg.content.some((c: any) =>
              c.type === 'image' || c.type === 'image_url' || c.image_url || c.inlineData
            );

            if (hasImages) {
              msg.content = msg.content.map((c: any) => {
                if (c.type === 'text' || c.type === 'input_text') {
                  return { type: 'text', text: c.text };
                }
                if (c.text && !c.type) {
                  return { type: 'text', text: c.text };
                }
                if (c.type === 'image_url' || c.image_url) {
                  return { type: 'image_url', image_url: c.image_url || { url: c.url } };
                }
                if (c.inlineData) {
                  return {
                    type: 'image_url',
                    image_url: {
                      url: `data:${c.inlineData.mimeType};base64,${c.inlineData.data}`
                    }
                  };
                }
                return c;
              });
              return msg;
            }

            const text = msg.content
              .filter((c: any) => c.type === 'text' || c.type === 'input_text' || c.text)
              .map((c: any) => c.text)
              .join('\n');
            return { ...msg, content: text };
          }
          return msg;
        });

        options.body = JSON.stringify(body);
      }
    } catch (e) {
      console.error('Error in customFetch transformation:', e);
    }
  }

  const response = await fetch(newUrl, options);

  if (response.ok && response.headers.get('content-type')?.includes('application/json')) {
    try {
      const clone = response.clone();
      const data = await clone.json();

      if (data.usage) {
        if (data.usage.input_tokens === undefined) {
          data.usage.input_tokens = data.usage.prompt_tokens || 0;
        }
        if (data.usage.output_tokens === undefined) {
          data.usage.output_tokens = data.usage.completion_tokens || 0;
        }
      }

      const newHeaders: Record<string, string> = {};
      response.headers.forEach((value, key) => {
        newHeaders[key] = value;
      });
      delete newHeaders['content-encoding'];
      delete newHeaders['transfer-encoding'];
      delete newHeaders['content-length'];

      return new Response(JSON.stringify(data), {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
      });
    } catch (e) {
      console.error('Error processing response in customFetch:', e);
    }
  }

  return response;
};

let llmInstance: AiSdkLlm | null = null;
let scannerLlmInstance: AiSdkLlm | null = null;

function create0GLlmProvider(providerAddress: string, modelName: string): AiSdkLlm {
  const zgOpenAI = createOpenAI({
    apiKey: '0g-inference',
    baseURL: '', // Will be set dynamically after initialization
    fetch: async (url: string, options: any) => {
      if (!zgInferenceService.isInitialized()) {
        throw new Error('0G Inference not initialized — ZG_COMPUTE_PRIVATE_KEY is required');
      }

      const { endpoint } = await zgInferenceService.getProviderEndpoint(providerAddress);
      const headers = await zgInferenceService.getProviderHeaders(providerAddress);

      const targetUrl = url.replace(/^https?:\/\/[^/]+/, endpoint);

      if (options.headers) {
        options.headers = { ...options.headers, ...headers };
      } else {
        options.headers = headers;
      }

      const response = await customFetch(targetUrl, options);

      const chatId = response.headers.get('ZG-Res-Key');
      if (chatId) {
        try {
          const isValid = await zgInferenceService.verifyResponse(providerAddress, chatId);
          console.log(`0G TEE verification: ${isValid}`);
        } catch {}
      }

      return response;
    },
  } as any);

  return new AiSdkLlm(zgOpenAI.chat(modelName));
}

export async function initializeLLM(): Promise<void> {
  await zgInferenceService.initialize();

  if (!zgInferenceService.isInitialized()) {
    throw new Error(
      '0G Inference failed to initialize. Set ZG_COMPUTE_PRIVATE_KEY and ZG_INERENCE_PROVIDER to continue.'
    );
  }

  const providerAddr = zgInferenceService.getProviderAddress();
  const model = zgInferenceService.getModel();

  llmInstance = create0GLlmProvider(providerAddr, model);
  console.log(`✅ 0G Inference LLM initialized — provider: ${providerAddr}, model: ${model}`);

  const scannerProviderAddr = zgInferenceService.getScannerProviderAddress();
  const scannerModel = zgInferenceService.getScannerModel();

  scannerLlmInstance = create0GLlmProvider(scannerProviderAddr, scannerModel);
  console.log(`✅ 0G Scanner LLM initialized — provider: ${scannerProviderAddr}, model: ${scannerModel}`);
}

export function getLLM(): AiSdkLlm {
  if (!llmInstance) {
    throw new Error('LLM not initialized. Call initializeLLM() first.');
  }
  return llmInstance;
}

export function getScannerLLM(): AiSdkLlm {
  if (!scannerLlmInstance) {
    throw new Error('Scanner LLM not initialized. Call initializeLLM() first.');
  }
  return scannerLlmInstance;
}

export const llm = new Proxy({} as AiSdkLlm, {
  get(_target, prop) {
    if (!llmInstance) {
      throw new Error('LLM not initialized. Call initializeLLM() at startup.');
    }
    return (llmInstance as any)[prop];
  },
});

export const scannerLlm = new Proxy({} as AiSdkLlm, {
  get(_target, prop) {
    if (!scannerLlmInstance) {
      throw new Error('Scanner LLM not initialized. Call initializeLLM() at startup.');
    }
    return (scannerLlmInstance as any)[prop];
  },
});
