import { zgInferenceService } from './0g-inference.service';
import { logger } from '../utils/logger.util';

interface VisionMessage {
  role: 'user' | 'assistant' | 'system';
  content: Array<
    | { type: 'text'; text: string }
    | { type: 'image_url'; image_url: { url: string } }
  >;
}

interface VisionRequestOptions {
  model?: string;
  maxTokens?: number;
  temperature?: number;
}

export async function callVisionLLM(
  messages: VisionMessage[],
  options: VisionRequestOptions = {}
): Promise<string> {
  if (!zgInferenceService.isInitialized()) {
    throw new Error('0G Inference not initialized — ZG_COMPUTE_PRIVATE_KEY is required');
  }

  const model = options.model;

  logger.info(`VisionLLM: Calling 0G Inference with ${messages.length} messages`);

  const imageCount = messages.reduce((count, msg) => {
    if (Array.isArray(msg.content)) {
      return count + msg.content.filter(c => c.type === 'image_url').length;
    }
    return count;
  }, 0);

  logger.info(`VisionLLM: Request contains ${imageCount} image(s)`);

  messages.forEach((msg, i) => {
    if (Array.isArray(msg.content)) {
      const textParts = msg.content.filter(c => c.type === 'text').map(c => (c as { type: 'text'; text: string }).text);
      if (textParts.length > 0) {
        const promptPreview = textParts.join('\n').substring(0, 500);
        logger.info(`VisionLLM: Message ${i} prompt: ${promptPreview}${textParts.join('\n').length > 500 ? '...' : ''}`);
      }
    }
  });

  const result = await zgInferenceService.chat(messages as any, { model });
  logger.info('VisionLLM: 0G Inference response received');

  return result.content;
}

export function createVisionMessage(
  text: string,
  base64Image: string,
  mimeType: string = 'image/png'
): VisionMessage {
  return {
    role: 'user',
    content: [
      { type: 'text', text },
      {
        type: 'image_url',
        image_url: {
          url: `data:${mimeType};base64,${base64Image}`,
        },
      },
    ],
  };
}

export function createMultiImageVisionMessage(
  text: string,
  images: Array<{ base64: string; mimeType?: string }>
): VisionMessage {
  const content: VisionMessage['content'] = [{ type: 'text', text }];

  for (const img of images) {
    content.push({
      type: 'image_url',
      image_url: {
        url: `data:${img.mimeType || 'image/png'};base64,${img.base64}`,
      },
    });
  }

  return { role: 'user', content };
}
