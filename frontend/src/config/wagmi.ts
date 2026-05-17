import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { fraxtal } from 'wagmi/chains';
import { defineChain } from 'viem';

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || '3a8170812b534d0ff9d794f19a901d64';

const zeroGGalileoTestnet = defineChain({
  id: 16602,
  name: '0G-Galileo-Testnet',
  nativeCurrency: {
    decimals: 18,
    name: '0G',
    symbol: '0G',
  },
  rpcUrls: {
    default: {
      http: ['https://evmrpc-testnet.0g.ai'],
    },
  },
  blockExplorers: {
    default: {
      name: '0G ChainScan',
      url: 'https://chainscan-galileo.0g.ai',
    },
  },
  faucets: ['https://faucet.0g.ai'],
});

const zeroGMainnet = defineChain({
  id: 16661,
  name: '0G Mainnet',
  nativeCurrency: {
    decimals: 18,
    name: '0G',
    symbol: '0G',
  },
  rpcUrls: {
    default: {
      http: ['https://evmrpc.0g.ai'],
    },
  },
  blockExplorers: {
    default: {
      name: '0G ChainScan',
      url: 'https://chainscan.0g.ai',
    },
  },
});

export const ZG_CHAINS = {
  testnet: zeroGGalileoTestnet,
  mainnet: zeroGMainnet,
} as const;

export const RGE_TOKEN_ADDRESSES = {
  fraxtal: '0xe5Ee677388a6393d135bEd00213E150b1F64b032',
  '0g-testnet': import.meta.env.VITE_RGE_TOKEN_ZG_TESTNET || '',
  '0g-mainnet': import.meta.env.VITE_RGE_TOKEN_ZG_MAINNET || '',
} as const;

export const config = getDefaultConfig({
  appName: 'RogueAgent',
  projectId,
  chains: [fraxtal, zeroGGalileoTestnet, zeroGMainnet],
  ssr: false,
});
