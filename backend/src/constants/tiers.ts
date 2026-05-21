export const TIERS = {
  NONE: 'NONE',
  SILVER: 'SILVER',
  GOLD: 'GOLD',
  DIAMOND: 'DIAMOND',
} as const;

export type Tier = keyof typeof TIERS;

export const TIER_THRESHOLDS = {
  SILVER: 10,
  GOLD: 100,
  DIAMOND: 1000,
};

export const CONTRACTS = {
  RGE_TOKEN_ZG_MAINNET: process.env.RGE_TOKEN_ZG_MAINNET || '0x4Cd7fDFf83DC1540696BdaF38840a93134336dF8',
  RGE_TOKEN_ZG_TESTNET: process.env.RGE_TOKEN_ZG_TESTNET || '0x4Cd7fDFf83DC1540696BdaF38840a93134336dF8',
  ZG_MAINNET_PLATFORM_ID: '0g-mainnet',
  ZG_PLATFORM_ID: '0g',
};

export const SUPPORTED_CHAINS = {
  '0g-mainnet': {
    rpcUrl: 'https://evmrpc.0g.ai',
    chainId: 16661,
    name: '0G Mainnet',
    rgeToken: CONTRACTS.RGE_TOKEN_ZG_MAINNET,
  },
  '0g-testnet': {
    rpcUrl: 'https://evmrpc-testnet.0g.ai',
    chainId: 16602,
    name: '0G-Galileo-Testnet',
    rgeToken: CONTRACTS.RGE_TOKEN_ZG_TESTNET,
  },
} as const;
