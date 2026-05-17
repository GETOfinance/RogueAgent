import { Router, Request, Response } from 'express';
import { zgInferenceService } from '../services/0g-inference.service';
import { zgStorageService } from '../services/0g-storage.service';
import { zgFinetuningService } from '../services/0g-finetuning.service';
import { zgMemoryService } from '../services/0g-memory.service';
import { logger } from '../utils/logger.util';

const router = Router();

router.get('/status', (_req: Request, res: Response) => {
  res.json({
    inference: {
      initialized: zgInferenceService.isInitialized(),
      model: zgInferenceService.getModel(),
      scannerModel: zgInferenceService.getScannerModel(),
      provider: '0G Compute Network',
    },
    storage: {
      initialized: zgStorageService.isInitialized(),
      provider: '0G Storage',
    },
    finetuning: {
      initialized: zgFinetuningService.isInitialized(),
      tasks: zgFinetuningService.getTasks(),
    },
    memory: {
      cachedTypes: ['embedding', 'trade_memory', 'token_intel', 'whale_alert', 'sentiment_archive'],
      provider: '0G Storage (encrypted)',
    },
  });
});

router.post('/inference/chat', async (req: Request, res: Response) => {
  try {
    const { messages, model, useScanner } = req.body;
    if (!messages || !Array.isArray(messages)) {
      res.status(400).json({ error: 'messages array required' });
      return;
    }
    const result = await zgInferenceService.chat(messages, { model, useScanner });
    res.json(result);
  } catch (error: any) {
    logger.error('0G inference chat error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

router.post('/storage/upload', async (req: Request, res: Response) => {
  try {
    const { data, key, contentType } = req.body;
    if (!data) {
      res.status(400).json({ error: 'data required (base64 encoded)' });
      return;
    }
    const buffer = Buffer.from(data, 'base64');
    const url = await zgStorageService.uploadBuffer(buffer, key || `upload/${Date.now()}`, contentType);
    res.json({ url });
  } catch (error: any) {
    logger.error('0G storage upload error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

router.post('/memory/store', async (req: Request, res: Response) => {
  try {
    const { type, data, metadata } = req.body;
    const rootHash = await zgMemoryService.store({
      type,
      data,
      timestamp: new Date().toISOString(),
      metadata,
    });
    res.json({ rootHash });
  } catch (error: any) {
    logger.error('0G memory store error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

router.get('/memory/retrieve/:rootHash', async (req: Request, res: Response) => {
  try {
    const entry = await zgMemoryService.retrieve(req.params.rootHash);
    if (!entry) {
      res.status(404).json({ error: 'Not found' });
      return;
    }
    res.json(entry);
  } catch (error: any) {
    logger.error('0G memory retrieve error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

router.post('/finetuning/prepare-dataset', async (req: Request, res: Response) => {
  try {
    const { minConfidence, includeWinningTrades, includeLosingTrades } = req.body;
    const outputPath = await zgFinetuningService.prepareTradingDataset(
      `/tmp/rogue-dataset-${Date.now()}.jsonl`,
      { minConfidence, includeWinningTrades, includeLosingTrades }
    );
    res.json({ outputPath, message: 'Dataset prepared' });
  } catch (error: any) {
    logger.error('0G finetuning prepare error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

router.post('/finetuning/create-task', async (req: Request, res: Response) => {
  try {
    const { datasetPath, config: ftConfig } = req.body;
    const task = await zgFinetuningService.createTask(datasetPath, ftConfig);
    if (!task) {
      res.status(500).json({ error: 'Failed to create task' });
      return;
    }
    res.json(task);
  } catch (error: any) {
    logger.error('0G finetuning create task error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

router.post('/finetuning/acknowledge-model', async (req: Request, res: Response) => {
  try {
    const { taskId, outputPath } = req.body;
    if (!taskId || !outputPath) {
      res.status(400).json({ error: 'taskId and outputPath required' });
      return;
    }
    const success = await zgFinetuningService.acknowledgeAndDownloadModel(taskId, outputPath);
    if (!success) {
      res.status(500).json({ error: 'Failed to acknowledge/download model' });
      return;
    }
    res.json({ success: true, message: 'Model acknowledged and downloaded' });
  } catch (error: any) {
    logger.error('0G finetuning acknowledge error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

router.get('/finetuning/task/:taskId', async (req: Request, res: Response) => {
  try {
    const task = await zgFinetuningService.getTaskStatus(req.params.taskId);
    if (!task) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }
    res.json(task);
  } catch (error: any) {
    logger.error('0G finetuning get task error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

export const zgController = router;
