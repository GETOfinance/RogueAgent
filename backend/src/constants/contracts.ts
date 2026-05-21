export const CONTRACTS = {
  RGE_TOKEN_ZG_MAINNET: process.env.RGE_TOKEN_ZG_MAINNET || '0x4Cd7fDFf83DC1540696BdaF38840a93134336dF8',
  RGE_TOKEN_ZG_TESTNET: process.env.RGE_TOKEN_ZG_TESTNET || '0x4Cd7fDFf83DC1540696BdaF38840a93134336dF8',
  ZG_MAINNET_PLATFORM_ID: '0g-mainnet',
};

export const ZG_CHAINS = {
  testnet: {
    name: '0G Galileo Testnet',
    chainId: 16602,
    rpcUrl: 'https://evmrpc-testnet.0g.ai',
    blockExplorer: 'https://chainscan-galileo.0g.ai',
    currency: '0G',
    faucet: 'https://faucet.0g.ai',
  },
  mainnet: {
    name: '0G Mainnet',
    chainId: 16661,
    rpcUrl: 'https://evmrpc.0g.ai',
    blockExplorer: 'https://chainscan.0g.ai',
    currency: '0G',
  },
};

export const ZG_STORAGE_CONTRACTS = {
  testnet: {
    flow: '0x22E03a6A89B950F1c82ec5e74F8eCa321a105296',
    mine: '0x00A9E9604b0538e06b268Fb297Df333337f9593b',
    reward: '0xA97B57b4BdFEA2D0a25e535bd849ad4e6C440A69',
  },
  mainnet: {
    flow: '0x62D4144dB0F0a6fBBaeb6296c785C71B3D57C526',
    mine: '0xCd01c5Cd953971CE4C2c9bFb95610236a7F414fe',
    reward: '0x457aC76B58ffcDc118AABD6DbC63ff9072880870',
  },
};

export const ZG_STORAGE_INDEXERS = {
  testnet: {
    turbo: 'https://indexer-storage-testnet-turbo.0g.ai',
  },
  mainnet: {
    turbo: 'https://indexer-storage-turbo.0g.ai',
  },
};
