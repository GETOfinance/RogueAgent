import { ethers } from 'ethers';
import { createZGComputeNetworkBroker } from '@0gfoundation/0g-compute-ts-sdk';
import { config } from '../config/env.config';
import { logger } from '../utils/logger.util';
import { retry } from '../utils/retry.util';

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string | Array<{ type: 'text'; text?: string } | { type: 'image_url'; image_url: { url: string } }>;
}

interface InferenceResponse {
  content: string;
  usage?: {
    input_tokens: number;
    output_tokens: number;
  };
  chatId?: string;
}

class ZGInferenceService {
  private broker: any = null;
  private providerAddress: string = '';
  private scannerProviderAddress: string = '';
  private model: string = '';
  private scannerModel: string = '';
  private serviceEndpoint: string = '';
  private scannerEndpoint: string = '';
  private initialized = false;
  private scannerInitialized = false;

  async initialize(): Promise<void> {
    if (this.initialized) return;

    const privateKey = config.ZG_COMPUTE_PRIVATE_KEY;
    if (!privateKey) {
      throw new Error('ZG_COMPUTE_PRIVATE_KEY is required for 0G Inference');
    }

    const provider = new ethers.JsonRpcProvider(
      config.ZG_COMPUTE_NETWORK === 'testnet'
        ? 'https://evmrpc-testnet.0g.ai'
        : config.ZG_RPC_URL
    );
    const wallet = new ethers.Wallet(privateKey, provider);

    this.broker = await createZGComputeNetworkBroker(wallet);
    this.model = config.ZG_INERENCE_MODEL;
    this.scannerModel = config.ZG_SCANNER_MODEL;

    if (config.ZG_INERENCE_PROVIDER) {
      this.providerAddress = config.ZG_INERENCE_PROVIDER;
    } else {
      await this.discoverProvider('chatbot');
    }

    if (this.providerAddress) {
      const meta = await this.broker.inference.getServiceMetadata(this.providerAddress);
      this.serviceEndpoint = meta.endpoint;
      this.initialized = true;
      logger.info(`0G Inference initialized — provider: ${this.providerAddress}, model: ${this.model}, endpoint: ${this.serviceEndpoint}`);
    }

    if (config.ZG_SCANNER_PROVIDER) {
      this.scannerProviderAddress = config.ZG_SCANNER_PROVIDER;
    } else {
      this.scannerProviderAddress = this.providerAddress;
      this.scannerModel = this.model;
    }

    if (this.scannerProviderAddress) {
      const meta = await this.broker.inference.getServiceMetadata(this.scannerProviderAddress);
      this.scannerEndpoint = meta.endpoint;
      this.scannerInitialized = true;
      logger.info(`0G Scanner initialized — provider: ${this.scannerProviderAddress}, model: ${this.scannerModel}`);
    }
  }

  private async discoverProvider(serviceType: string): Promise<void> {
    try {
      const services = await this.broker.inference.listService();
      const matching = services.filter((s: any) => s.serviceType === serviceType);

      if (matching.length > 0) {
        this.providerAddress = matching[0].provider;
        logger.info(`0G Inference: auto-discovered ${serviceType} provider ${this.providerAddress}`);
      } else {
        throw new Error(`No ${serviceType} providers found on 0G Compute Network`);
      }
    } catch (error: any) {
      logger.error(`0G Inference: provider discovery failed: ${error.message}`);
      throw error;
    }
  }

  async getProviderEndpoint(providerAddress?: string): Promise<{ endpoint: string; model: string }> {
    const addr = providerAddress || this.providerAddress;
    const meta = await this.broker.inference.getServiceMetadata(addr);
    return { endpoint: meta.endpoint, model: meta.model };
  }

  async getProviderHeaders(providerAddress?: string, content?: string): Promise<Record<string, string>> {
    const addr = providerAddress || this.providerAddress;
    return await this.broker.inference.getRequestHeaders(addr, content);
  }

  async verifyResponse(providerAddress: string, chatId: string, content?: string): Promise<boolean | null> {
    return await this.broker.inference.processResponse(providerAddress, chatId, content);
  }

  async chat(messages: ChatMessage[], options?: { model?: string; useScanner?: boolean }): Promise<InferenceResponse> {
    const useScanner = options?.useScanner ?? false;
    const brokerReady = useScanner ? this.scannerInitialized : this.initialized;

    if (!brokerReady || !this.broker) {
      throw new Error('0G Inference not initialized');
    }

    const providerAddr = useScanner ? this.scannerProviderAddress : this.providerAddress;
    const endpoint = useScanner ? this.scannerEndpoint : this.serviceEndpoint;
    const model = options?.model || (useScanner ? this.scannerModel : this.model);

    try {
      const { model: serviceModel } = await this.broker.inference.getServiceMetadata(providerAddr);
      const headers = await this.broker.inference.getRequestHeaders(providerAddr);

      const normalizedMessages = messages.map(msg => {
        if (typeof msg.content === 'string') {
          return { role: msg.role, content: msg.content };
        }
        return { role: msg.role, content: msg.content };
      });

      const response = await retry(async () => {
        const res = await fetch(`${endpoint}/chat/completions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', ...headers },
          body: JSON.stringify({ messages: normalizedMessages, model: model || serviceModel }),
        });

        if (!res.ok) {
          const errText = await res.text();
          throw new Error(`0G Inference API error: ${res.status} — ${errText}`);
        }
        return res;
      }, 3, 2000);

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content || '';
      const chatId = response.headers.get('ZG-Res-Key') || data.id;

      if (chatId) {
        try {
          const isValid = await this.broker.inference.processResponse(providerAddr, chatId);
          logger.info(`0G Inference: TEE verification result: ${isValid}`);
        } catch (verifyErr: any) {
          logger.warn('0G Inference: TEE verification failed (non-fatal):', verifyErr.message);
        }
      }

      return {
        content,
        usage: {
          input_tokens: data.usage?.prompt_tokens || data.usage?.input_tokens || 0,
          output_tokens: data.usage?.completion_tokens || data.usage?.output_tokens || 0,
        },
        chatId: chatId || undefined,
      };
    } catch (error: any) {
      logger.error(`0G Inference: chat request failed: ${error.message}`);
      throw error;
    }
  }

  isInitialized(): boolean {
    return this.initialized;
  }

  getModel(): string {
    return this.model;
  }

  getScannerModel(): string {
    return this.scannerModel;
  }

  getProviderAddress(): string {
    return this.providerAddress;
  }

  getScannerProviderAddress(): string {
    return this.scannerProviderAddress;
  }
}

export const zgInferenceService = new ZGInferenceService();
