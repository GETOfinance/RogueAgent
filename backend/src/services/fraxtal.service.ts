import { ethers } from 'ethers';
import { config } from '../config/env.config';
import { logger } from '../utils/logger.util';
import { CONTRACTS } from '../constants/tiers';

const ERC20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
];

export class ChainService {
  private providers: Map<string, ethers.JsonRpcProvider> = new Map();
  private tokenContracts: Map<string, ethers.Contract> = new Map();
  private decimals: Map<string, number> = new Map();

  constructor() {
    if (CONTRACTS.RGE_TOKEN_ZG_MAINNET) {
      this.initializeChain('0g-mainnet', config.ZG_CHAIN_RPC_URL || 'https://evmrpc.0g.ai', CONTRACTS.RGE_TOKEN_ZG_MAINNET);
    }

    if (CONTRACTS.RGE_TOKEN_ZG_TESTNET) {
      this.initializeChain('0g-testnet', 'https://evmrpc-testnet.0g.ai', CONTRACTS.RGE_TOKEN_ZG_TESTNET);
    }

    logger.info(`ChainService initialized for chains: ${Array.from(this.providers.keys()).join(', ')}`);
  }

  private initializeChain(chainId: string, rpcUrl: string, tokenAddress: string): void {
    if (!tokenAddress) return;

    try {
      const provider = new ethers.JsonRpcProvider(rpcUrl);
      const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
      this.providers.set(chainId, provider);
      this.tokenContracts.set(chainId, contract);
      logger.info(`ChainService: ${chainId} chain initialized — RPC: ${rpcUrl}, Token: ${tokenAddress}`);
    } catch (error: any) {
      logger.error(`ChainService: failed to initialize ${chainId}:`, error.message);
    }
  }

  private async getDecimals(chainId: string): Promise<number> {
    if (this.decimals.has(chainId)) return this.decimals.get(chainId)!;
    try {
      const contract = this.tokenContracts.get(chainId);
      if (!contract) return 18;
      const decimals = await contract.decimals();
      this.decimals.set(chainId, Number(decimals));
      return this.decimals.get(chainId)!;
    } catch (error) {
      logger.error('Failed to fetch token decimals, defaulting to 18', error);
      return 18;
    }
  }

  async getRGEBalance(address: string, chainId: string = '0g-mainnet'): Promise<number> {
    try {
      if (!ethers.isAddress(address)) {
        throw new Error('Invalid address format');
      }

      const contract = this.tokenContracts.get(chainId);
      if (!contract) {
        throw new Error(`Chain ${chainId} not configured for RGE token`);
      }

      const balancePromise = contract.balanceOf(address);
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('RPC Timeout')), 5000)
      );

      const rawBalance = await Promise.race([balancePromise, timeoutPromise]) as bigint;
      const decimals = await this.getDecimals(chainId);

      const formattedBalance = ethers.formatUnits(rawBalance, decimals);
      const balance = parseFloat(formattedBalance);

      logger.info(`Fetched RGE balance for ${address} on ${chainId}: ${balance}`);
      return balance;
    } catch (error) {
      logger.error(`Failed to get RGE balance for ${address} on ${chainId}`, error);
      throw error;
    }
  }

  async getRGEBalanceAllChains(address: string): Promise<Record<string, number>> {
    const balances: Record<string, number> = {};

    for (const chainId of this.providers.keys()) {
      try {
        balances[chainId] = await this.getRGEBalance(address, chainId);
      } catch (error: any) {
        logger.warn(`Failed to get RGE balance on ${chainId}:`, error.message);
        balances[chainId] = 0;
      }
    }

    return balances;
  }

  async getMaxRGEBalance(address: string): Promise<number> {
    const balances = await this.getRGEBalanceAllChains(address);
    return Math.max(...Object.values(balances));
  }

  isValidAddress(address: string): boolean {
    return ethers.isAddress(address);
  }

  getSupportedChains(): string[] {
    return Array.from(this.providers.keys());
  }
}

export const fraxtalService = new ChainService();
