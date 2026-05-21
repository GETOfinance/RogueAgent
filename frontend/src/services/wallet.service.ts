import { api } from './api.service';
import { Tier, RGE_CONTRACTS } from '../constants/tiers';
import { createPublicClient, http } from 'viem';
import { ZG_CHAINS } from '../config/wagmi';

const ERC20_ABI = [
  {
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

function getChainConfig(chainId: number) {
  if (chainId === ZG_CHAINS.mainnet.id && RGE_CONTRACTS['0g-mainnet'].address)
    return { chain: ZG_CHAINS.mainnet, contract: RGE_CONTRACTS['0g-mainnet'].address };
  if (chainId === ZG_CHAINS.testnet.id && RGE_CONTRACTS['0g-testnet'].address)
    return { chain: ZG_CHAINS.testnet, contract: RGE_CONTRACTS['0g-testnet'].address };
  return null;
}

export const walletService = {
  async verifyTier(walletAddress: string): Promise<{ tier: Tier; balance: number; telegram_connected: boolean }> {
    const response = await api.post('/tiers/verify', { walletAddress });
    return response.data.data;
  },

  async getRGEBalanceOnChain(walletAddress: string, chainId: number): Promise<number> {
    const chainConfig = getChainConfig(chainId);
    if (!chainConfig || !chainConfig.contract) return 0;

    try {
      const client = createPublicClient({
        chain: chainConfig.chain,
        transport: http(),
      });

      const balance = await client.readContract({
        address: chainConfig.contract as `0x${string}`,
        abi: ERC20_ABI,
        functionName: 'balanceOf',
        args: [walletAddress as `0x${string}`],
      });

      const decimals = await client.readContract({
        address: chainConfig.contract as `0x${string}`,
        abi: ERC20_ABI,
        functionName: 'decimals',
      });

      const formatted = Number(balance) / Math.pow(10, Number(decimals));
      return formatted;
    } catch {
      return 0;
    }
  },
};
