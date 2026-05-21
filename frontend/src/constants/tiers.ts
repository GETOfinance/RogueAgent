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

export const TIER_BENEFITS = {
  [TIERS.NONE]: ['Select signals on X (delayed 30m)', 'Dashboard access'],
  [TIERS.SILVER]: ['Up to 40% more signals via Telegram', '15 min early access', 'Private Telegram DMs'],
  [TIERS.GOLD]: ['Up to 40% more signals via Telegram', 'Immediate access', 'Sunday Deep-Dive Thread', 'Advanced signals'],
  [TIERS.DIAMOND]: ['Up to 40% more signals via Telegram', 'Everything in Gold', 'Unlimited Custom Scans (DM)', 'Instant Alpha'],
};

export const RGE_CONTRACTS = {
  '0g-mainnet': {
    address: import.meta.env.VITE_RGE_TOKEN_ZG_MAINNET || '0x4Cd7fDFf83DC1540696BdaF38840a93134336dF8',
    chainId: 16661,
    name: '0G Mainnet',
  },
  '0g-testnet': {
    address: import.meta.env.VITE_RGE_TOKEN_ZG_TESTNET || '0x4Cd7fDFf83DC1540696BdaF38840a93134336dF8',
    chainId: 16602,
    name: '0G-Galileo-Testnet',
  },
} as const;
