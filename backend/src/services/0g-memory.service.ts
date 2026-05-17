import { zgStorageService } from './0g-storage.service';
import { logger } from '../utils/logger.util';
import crypto from 'crypto';

interface MemoryEntry {
  id?: string;
  type: 'embedding' | 'trade_memory' | 'token_intel' | 'whale_alert' | 'sentiment_archive';
  data: any;
  timestamp: string;
  metadata?: Record<string, any>;
}

class ZGMemoryService {
  private encryptionKey: Uint8Array | null = null;
  private memoryCache: Map<string, MemoryEntry[]> = new Map();

  constructor() {
    const keyHex = process.env.ZG_MEMORY_ENCRYPTION_KEY;
    if (keyHex) {
      this.encryptionKey = new Uint8Array(Buffer.from(keyHex, 'hex'));
    } else {
      this.encryptionKey = crypto.randomBytes(32);
      logger.info('ZG Memory: generated ephemeral encryption key (set ZG_MEMORY_ENCRYPTION_KEY for persistence)');
    }
  }

  async store(entry: MemoryEntry): Promise<string | null> {
    if (!zgStorageService.isInitialized()) {
      logger.warn('ZG Memory: 0G Storage not initialized — cannot store');
      return null;
    }

    try {
      const payload = JSON.stringify({
        ...entry,
        timestamp: entry.timestamp || new Date().toISOString(),
      });

      const buffer = Buffer.from(payload, 'utf-8');
      const key = `memory/${entry.type}/${Date.now()}-${crypto.randomUUID()}`;

      const rootHash = await zgStorageService.uploadEncryptedBuffer(
        buffer,
        key,
        this.encryptionKey!
      );

      logger.info(`ZG Memory: stored ${entry.type} — rootHash: ${rootHash}`);

      this.cacheEntry(entry.type, entry);

      return rootHash;
    } catch (error: any) {
      logger.error(`ZG Memory: store failed for ${entry.type}:`, error.message);
      return null;
    }
  }

  async storeBatch(entries: MemoryEntry[]): Promise<Map<string, string | null>> {
    const results = new Map<string, string | null>();
    for (const entry of entries) {
      const rootHash = await this.store(entry);
      results.set(entry.type, rootHash);
    }
    return results;
  }

  async retrieve(rootHash: string): Promise<MemoryEntry | null> {
    if (!zgStorageService.isInitialized() || !this.encryptionKey) {
      logger.warn('ZG Memory: 0G Storage not initialized — cannot retrieve');
      return null;
    }

    try {
      const buffer = await zgStorageService.downloadEncrypted(rootHash, this.encryptionKey);
      const entry = JSON.parse(buffer.toString('utf-8')) as MemoryEntry;
      return entry;
    } catch (error: any) {
      logger.error(`ZG Memory: retrieve failed for ${rootHash}:`, error.message);
      return null;
    }
  }

  async storeTradeMemory(trade: {
    symbol: string;
    direction: string;
    entryPrice: number;
    exitPrice?: number;
    pnl?: number;
    confidence: number;
    outcome: 'win' | 'loss' | 'open';
    agentId?: string;
  }): Promise<string | null> {
    return this.store({
      type: 'trade_memory',
      data: trade,
      timestamp: new Date().toISOString(),
      metadata: { symbol: trade.symbol, outcome: trade.outcome },
    });
  }

  async storeTokenIntel(intel: {
    symbol: string;
    narrative: string;
    sentiment: number;
    sources: string[];
  }): Promise<string | null> {
    return this.store({
      type: 'token_intel',
      data: intel,
      timestamp: new Date().toISOString(),
      metadata: { symbol: intel.symbol },
    });
  }

  async storeWhaleAlert(alert: {
    token: string;
    wallet: string;
    amount: string;
    action: string;
    chain: string;
  }): Promise<string | null> {
    return this.store({
      type: 'whale_alert',
      data: alert,
      timestamp: new Date().toISOString(),
      metadata: { token: alert.token, chain: alert.chain },
    });
  }

  async storeSentimentArchive(sentiment: {
    token: string;
    score: number;
    source: string;
    summary: string;
  }): Promise<string | null> {
    return this.store({
      type: 'sentiment_archive',
      data: sentiment,
      timestamp: new Date().toISOString(),
      metadata: { token: sentiment.token },
    });
  }

  async storeEmbedding(embedding: {
    model: string;
    input: string;
    vector: number[];
    metadata?: Record<string, any>;
  }): Promise<string | null> {
    return this.store({
      type: 'embedding',
      data: embedding,
      timestamp: new Date().toISOString(),
      metadata: embedding.metadata,
    });
  }

  private cacheEntry(type: string, entry: MemoryEntry): void {
    if (!this.memoryCache.has(type)) {
      this.memoryCache.set(type, []);
    }
    const cache = this.memoryCache.get(type)!;
    cache.push(entry);
    if (cache.length > 1000) {
      cache.shift();
    }
  }

  getCached(type: string): MemoryEntry[] {
    return this.memoryCache.get(type) || [];
  }
}

export const zgMemoryService = new ZGMemoryService();
