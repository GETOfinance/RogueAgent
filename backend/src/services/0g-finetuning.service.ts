import { ethers } from 'ethers';
import { createZGComputeNetworkBroker } from '@0gfoundation/0g-compute-ts-sdk';
import { config } from '../config/env.config';
import { logger } from '../utils/logger.util';
import fs from 'fs';
import path from 'path';

interface FineTuningConfig {
  neftune_noise_alpha: number;
  num_train_epochs: number;
  per_device_train_batch_size: number;
  learning_rate: number;
  max_steps: number;
}

interface FineTuningTask {
  taskId: string;
  provider: string;
  model: string;
  status: string;
  createdAt?: string;
  fee?: number;
}

const DEFAULT_FINETUNING_CONFIG: FineTuningConfig = {
  neftune_noise_alpha: 5,
  num_train_epochs: 3,
  per_device_train_batch_size: 2,
  learning_rate: 0.0002,
  max_steps: -1,
};

class ZGFinetuningService {
  private broker: any = null;
  private providerAddress: string = '';
  private initialized = false;
  private tasks: Map<string, FineTuningTask> = new Map();

  async initialize(): Promise<void> {
    if (this.initialized) return;

    const privateKey = config.ZG_COMPUTE_PRIVATE_KEY;
    if (!privateKey) {
      throw new Error('ZG_COMPUTE_PRIVATE_KEY is required for 0G Fine-tuning');
    }

    try {
      const rpcUrl = config.ZG_COMPUTE_NETWORK === 'testnet'
        ? 'https://evmrpc-testnet.0g.ai'
        : config.ZG_RPC_URL;

      const provider = new ethers.JsonRpcProvider(rpcUrl);
      const wallet = new ethers.Wallet(privateKey, provider);

      this.broker = await createZGComputeNetworkBroker(wallet);

      if (config.ZG_FINETUNING_PROVIDER) {
        this.providerAddress = config.ZG_FINETUNING_PROVIDER;
      } else if (this.broker.fineTuning) {
        const services = await this.broker.inference.listService();
        const ftProviders = services.filter((s: any) => s.serviceType === 'fine-tuning');
        if (ftProviders.length > 0) {
          this.providerAddress = ftProviders[0].provider;
        }
      }

      if (this.providerAddress) {
        this.initialized = true;
        logger.info(`0G Fine-tuning Service initialized — provider: ${this.providerAddress}`);
      }
    } catch (error: any) {
      logger.error('Failed to initialize 0G Fine-tuning Service:', error.message);
    }
  }

  async prepareTradingDataset(
    outputPath: string,
    options?: {
      includeWinningTrades?: boolean;
      includeLosingTrades?: boolean;
      minConfidence?: number;
    }
  ): Promise<string> {
    const includeWinning = options?.includeWinningTrades ?? true;
    const includeLosing = options?.includeLosingTrades ?? true;
    const minConfidence = options?.minConfidence ?? 0;

    const { supabaseService } = await import('./supabase.service');
    const signals = await supabaseService.getRecentSignals(200);

    const dataset: Array<{
      instruction: string;
      input: string;
      output: string;
    }> = [];

    for (const signal of signals) {
      if (!signal.content) continue;

      const parsedContent = typeof signal.content === 'string'
        ? JSON.parse(signal.content)
        : signal.content;

      const confidence = (signal as any).confidence_score || parsedContent.confidence || 0;
      if (confidence < minConfidence) continue;

      const isWin = parsedContent.pnl_percent > 0;
      const isLoss = parsedContent.pnl_percent < 0;

      if (isWin && !includeWinning) continue;
      if (isLoss && !includeLosing) continue;

      dataset.push({
        instruction: 'Analyze this trading signal and predict market direction with entry, target, and stop-loss levels.',
        input: JSON.stringify({
          symbol: parsedContent.token || parsedContent.symbol,
          direction: parsedContent.direction,
          market_context: parsedContent.market_context || parsedContent.analysis,
          technical_indicators: parsedContent.technical_indicators,
          confidence: confidence,
        }),
        output: JSON.stringify({
          direction: parsedContent.direction,
          entry: parsedContent.entry,
          target: parsedContent.target,
          stop_loss: parsedContent.stop_loss,
          confidence: confidence,
          reasoning: parsedContent.reasoning || parsedContent.analysis,
          outcome: parsedContent.pnl_percent > 0 ? 'WIN' : parsedContent.pnl_percent < 0 ? 'LOSS' : 'OPEN',
          pnl_percent: parsedContent.pnl_percent,
        }),
      });
    }

    const jsonl = dataset.map(item => JSON.stringify(item)).join('\n');
    fs.writeFileSync(outputPath, jsonl, 'utf-8');

    logger.info(`0G Fine-tuning: prepared dataset with ${dataset.length} examples at ${outputPath}`);
    return outputPath;
  }

  async createTask(
    datasetPath: string,
    customConfig?: Partial<FineTuningConfig>
  ): Promise<FineTuningTask | null> {
    if (!this.initialized || !this.broker || !this.broker.fineTuning) {
      logger.error('0G Fine-tuning: not initialized or fineTuning broker unavailable');
      return null;
    }

    try {
      const ftConfig = { ...DEFAULT_FINETUNING_CONFIG, ...customConfig };

      const configPath = path.join(path.dirname(datasetPath), 'ft-config.json');
      fs.writeFileSync(configPath, JSON.stringify(ftConfig, null, 2), 'utf-8');

      logger.info(`0G Fine-tuning: uploading dataset to 0G Storage...`);
      const datasetHash = await this.broker.fineTuning.uploadDataset(datasetPath);
      logger.info(`0G Fine-tuning: dataset uploaded — hash: ${datasetHash}`);

      logger.info(`0G Fine-tuning: creating task with model ${config.ZG_FINETUNING_MODEL}`);

      const taskId = await this.broker.fineTuning.createTask(
        this.providerAddress,
        config.ZG_FINETUNING_MODEL,
        datasetHash,
        configPath
      );

      const task: FineTuningTask = {
        taskId,
        provider: this.providerAddress,
        model: config.ZG_FINETUNING_MODEL,
        status: 'Init',
      };

      this.tasks.set(task.taskId, task);
      logger.info(`0G Fine-tuning: task created — ID: ${task.taskId}`);

      return task;
    } catch (error: any) {
      logger.error(`0G Fine-tuning: createTask failed: ${error.message}`);
      return null;
    }
  }

  async getTaskStatus(taskId: string): Promise<FineTuningTask | null> {
    if (!this.initialized || !this.broker || !this.broker.fineTuning) return null;

    try {
      const result = await this.broker.fineTuning.getTask(this.providerAddress, taskId);

      const task: FineTuningTask = {
        taskId,
        provider: this.providerAddress,
        model: config.ZG_FINETUNING_MODEL,
        status: result.progress || result.status,
        createdAt: result.createdAt,
        fee: result.fee,
      };

      this.tasks.set(taskId, task);
      return task;
    } catch (error: any) {
      logger.error(`0G Fine-tuning: getTaskStatus failed for ${taskId}: ${error.message}`);
      return null;
    }
  }

  async acknowledgeAndDownloadModel(taskId: string, outputPath: string): Promise<boolean> {
    if (!this.initialized || !this.broker || !this.broker.fineTuning) return false;

    try {
      await this.broker.fineTuning.acknowledgeModel(
        this.providerAddress,
        taskId,
        outputPath
      );

      logger.info(`0G Fine-tuning: model acknowledged and downloaded for task ${taskId}`);
      return true;
    } catch (error: any) {
      logger.error(`0G Fine-tuning: acknowledgeModel failed: ${error.message}`);
      return false;
    }
  }

  isInitialized(): boolean {
    return this.initialized;
  }

  getTasks(): FineTuningTask[] {
    return Array.from(this.tasks.values());
  }
}

export const zgFinetuningService = new ZGFinetuningService();
