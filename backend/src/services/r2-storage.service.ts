import { zgStorageService } from './0g-storage.service';
import { logger } from '../utils/logger.util';

class StorageService {
  async uploadFile(
    buffer: Buffer,
    key: string,
    contentType: string = 'image/png'
  ): Promise<string> {
    if (!zgStorageService.isInitialized()) {
      throw new Error('0G Storage not initialized — ZG_STORAGE_PRIVATE_KEY is required');
    }
    return await zgStorageService.uploadBuffer(buffer, key, contentType);
  }

  async downloadFile(rootHash: string): Promise<Buffer> {
    if (!zgStorageService.isInitialized()) {
      throw new Error('0G Storage not initialized — ZG_STORAGE_PRIVATE_KEY is required');
    }
    return await zgStorageService.downloadToBuffer(rootHash);
  }
}

export const storageService = new StorageService();

export const r2StorageService = storageService;
