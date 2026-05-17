import { ZgFile, Indexer, MemData } from '@0gfoundation/0g-storage-ts-sdk';
import { ethers } from 'ethers';
import { config } from '../config/env.config';
import { logger } from '../utils/logger.util';

class ZGStorageService {
  private indexer: Indexer | null = null;
  private signer: ethers.Wallet | null = null;
  private initialized = false;

  async initialize(): Promise<void> {
    if (this.initialized) return;

    const privateKey = config.ZG_STORAGE_PRIVATE_KEY || config.ZG_COMPUTE_PRIVATE_KEY;
    if (!privateKey) {
      throw new Error('ZG_STORAGE_PRIVATE_KEY or ZG_COMPUTE_PRIVATE_KEY is required for 0G Storage');
    }

    try {
      const rpcUrl = config.ZG_COMPUTE_NETWORK === 'testnet'
        ? 'https://evmrpc-testnet.0g.ai'
        : config.ZG_RPC_URL;

      const provider = new ethers.JsonRpcProvider(rpcUrl);
      this.signer = new ethers.Wallet(privateKey, provider);
      this.indexer = new Indexer(config.ZG_STORAGE_INDEXER_RPC);

      this.initialized = true;
      logger.info(`0G Storage Service initialized — indexer: ${config.ZG_STORAGE_INDEXER_RPC}`);
    } catch (error: any) {
      logger.error('Failed to initialize 0G Storage Service:', error.message);
      throw error;
    }
  }

  async uploadBuffer(buffer: Buffer, key: string, contentType: string = 'image/png'): Promise<string> {
    if (!this.initialized || !this.indexer || !this.signer) {
      throw new Error('ZG_STORAGE_NOT_INITIALIZED');
    }

    try {
      logger.info(`0G Storage: uploading ${key} (${buffer.length} bytes)`);

      const data = new Uint8Array(buffer);
      const memData = new MemData(data);
      const [tree, treeErr] = await memData.merkleTree();
      if (treeErr !== null) {
        throw new Error(`Merkle tree error: ${treeErr}`);
      }

      const rpcUrl = config.ZG_COMPUTE_NETWORK === 'testnet'
        ? 'https://evmrpc-testnet.0g.ai'
        : config.ZG_RPC_URL;

      const [tx, uploadErr] = await this.indexer.upload(memData, rpcUrl, this.signer);
      if (uploadErr !== null) {
        throw new Error(`0G Storage upload error: ${uploadErr}`);
      }

      const rootHash = 'rootHash' in tx ? tx.rootHash : (tx as any).rootHashes?.[0];
      const publicUrl = `https://storagescan.0g.ai/turbo/file/${rootHash}`;

      logger.info(`0G Storage: uploaded ${key} — rootHash: ${rootHash}`);
      return publicUrl;
    } catch (error: any) {
      logger.error(`0G Storage: upload failed for ${key}:`, error.message);
      throw error;
    }
  }

  async downloadToBuffer(rootHash: string): Promise<Buffer> {
    if (!this.initialized || !this.indexer) {
      throw new Error('ZG_STORAGE_NOT_INITIALIZED');
    }

    try {
      const [blob, err] = await this.indexer.downloadToBlob(rootHash, { proof: true });
      if (err !== null) {
        throw new Error(`0G Storage download error: ${err}`);
      }
      return Buffer.from(await blob.arrayBuffer());
    } catch (error: any) {
      logger.error(`0G Storage: download failed for ${rootHash}:`, error.message);
      throw error;
    }
  }

  async uploadFile(filePath: string): Promise<string> {
    if (!this.initialized || !this.indexer || !this.signer) {
      throw new Error('ZG_STORAGE_NOT_INITIALIZED');
    }

    try {
      const file = await ZgFile.fromFilePath(filePath);
      const [tree, treeErr] = await file.merkleTree();
      if (treeErr !== null) {
        throw new Error(`Merkle tree error: ${treeErr}`);
      }

      const rpcUrl = config.ZG_COMPUTE_NETWORK === 'testnet'
        ? 'https://evmrpc-testnet.0g.ai'
        : config.ZG_RPC_URL;

      const [tx, uploadErr] = await this.indexer.upload(file, rpcUrl, this.signer);
      await file.close();

      if (uploadErr !== null) {
        throw new Error(`0G Storage upload error: ${uploadErr}`);
      }

      const rootHash = 'rootHash' in tx ? tx.rootHash : (tx as any).rootHashes?.[0];
      logger.info(`0G Storage: uploaded file — rootHash: ${rootHash}`);
      return rootHash;
    } catch (error: any) {
      logger.error(`0G Storage: file upload failed:`, error.message);
      throw error;
    }
  }

  async uploadEncryptedBuffer(buffer: Buffer, key: string, encryptionKey: Uint8Array): Promise<string> {
    if (!this.initialized || !this.indexer || !this.signer) {
      throw new Error('ZG_STORAGE_NOT_INITIALIZED');
    }

    try {
      const data = new Uint8Array(buffer);
      const memData = new MemData(data);
      const [tree, treeErr] = await memData.merkleTree();
      if (treeErr !== null) {
        throw new Error(`Merkle tree error: ${treeErr}`);
      }

      const rpcUrl = config.ZG_COMPUTE_NETWORK === 'testnet'
        ? 'https://evmrpc-testnet.0g.ai'
        : config.ZG_RPC_URL;

      const [tx, uploadErr] = await this.indexer.upload(memData, rpcUrl, this.signer, {
        encryption: { type: 'aes256', key: encryptionKey },
      });
      if (uploadErr !== null) {
        throw new Error(`0G Storage encrypted upload error: ${uploadErr}`);
      }

      const rootHash = 'rootHash' in tx ? tx.rootHash : (tx as any).rootHashes?.[0];
      logger.info(`0G Storage: uploaded encrypted ${key} — rootHash: ${rootHash}`);
      return rootHash;
    } catch (error: any) {
      logger.error(`0G Storage: encrypted upload failed for ${key}:`, error.message);
      throw error;
    }
  }

  async downloadEncrypted(rootHash: string, symmetricKey: Uint8Array): Promise<Buffer> {
    if (!this.initialized || !this.indexer) {
      throw new Error('ZG_STORAGE_NOT_INITIALIZED');
    }

    try {
      const [blob, err] = await this.indexer.downloadToBlob(rootHash, {
        proof: true,
        decryption: { symmetricKey },
      });
      if (err !== null) {
        throw new Error(`0G Storage encrypted download error: ${err}`);
      }
      return Buffer.from(await blob.arrayBuffer());
    } catch (error: any) {
      logger.error(`0G Storage: encrypted download failed for ${rootHash}:`, error.message);
      throw error;
    }
  }

  isInitialized(): boolean {
    return this.initialized;
  }
}

export const zgStorageService = new ZGStorageService();
