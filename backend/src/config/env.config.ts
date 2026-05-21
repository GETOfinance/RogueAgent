import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  PORT: z.string().default('3000'),
  SUPABASE_URL: z.string().url(),
  SUPABASE_SERVICE_KEY: z.string().min(1),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  RUN_INTERVAL_MINUTES: z.string().transform(Number).default('60'),
  // 0G Compute Network (Inference — Required)
  ZG_COMPUTE_PRIVATE_KEY: z.string().min(1),
  ZG_RPC_URL: z.string().default('https://evmrpc.0g.ai'),
  ZG_INERENCE_PROVIDER: z.string().min(1),
  ZG_INERENCE_MODEL: z.string().default('Qwen3-32B'),
  ZG_SCANNER_PROVIDER: z.string().min(1),
  ZG_SCANNER_MODEL: z.string().default('Qwen3-32B'),
  ZG_COMPUTE_NETWORK: z.enum(['mainnet', 'testnet']).default('mainnet'),
  // 0G Storage
  ZG_STORAGE_INDEXER_RPC: z.string().default('https://indexer-storage-turbo.0g.ai'),
  ZG_STORAGE_PRIVATE_KEY: z.string().min(1),
  // 0G Fine-tuning
  ZG_FINETUNING_PROVIDER: z.string().optional(),
  ZG_FINETUNING_MODEL: z.string().default('Qwen2.5-0.5B-Instruct'),
  // 0G Chain (RGE token deployment)
  ZG_CHAIN_RPC_URL: z.string().default('https://evmrpc.0g.ai'),
  ZG_CHAIN_RPC_URL_TESTNET: z.string().default('https://evmrpc-testnet.0g.ai'),
  RGE_TOKEN_ZG_TESTNET: z.string().optional(),
  RGE_TOKEN_ZG_MAINNET: z.string().optional(),
  // External APIs
  X_API_KEY: z.string().optional(),
  X_API_KEY_SECRET: z.string().optional(),
  X_ACCESS_TOKEN: z.string().optional(),
  X_ACCESS_TOKEN_SECRET: z.string().optional(),
  X_BEARER_TOKEN: z.string().optional(),
  TWITTER_API_KEY: z.string().optional(),
  TWITTERIO_API_KEY: z.string().optional(),
  TWITTER_LOGIN_COOKIES: z.string().optional(),
  TWITTER_PROXY: z.string().optional(),
  PROXY: z.string().optional(),
  TELEGRAM_BOT_TOKEN: z.string().optional(),
  TELEGRAM_CHANNEL_ID: z.string().optional(),
  COINGECKO_API_KEY: z.string().optional(),
  MORALIS_API_KEY: z.string().optional(),
  TAVILY_API_KEY: z.string().optional(),
  BIRDEYE_API_KEY: z.string().optional(),
  CMC_API_KEY: z.string().optional(),
  HF_TOKEN: z.string().optional(),
  IQAI_API_KEY: z.string().optional(),
  AGENT_TOKEN_CONTRACT: z.string().optional(),
  FUTURES_ENCRYPTION_KEY: z.string().optional(),
  INTERNAL_WEBHOOK_KEY: z.string().optional(),
  COINGECKO_API_KEY_1: z.string().optional(),
  COINGECKO_API_KEY_2: z.string().optional(),
  COINGECKO_API_KEY_3: z.string().optional(),
  COINGECKO_API_KEY_4: z.string().optional(),
  COINGECKO_API_KEY_5: z.string().optional(),
  COINGECKO_API_KEY_6: z.string().optional(),
  COINGECKO_API_KEY_7: z.string().optional(),
  COINGECKO_API_KEY_8: z.string().optional(),
  COINGECKO_API_KEY_9: z.string().optional(),
  COINGECKO_API_KEY_10: z.string().optional(),
  BIRDEYE_API_KEY_1: z.string().optional(),
  BIRDEYE_API_KEY_2: z.string().optional(),
  BIRDEYE_API_KEY_3: z.string().optional(),
  BIRDEYE_API_KEY_4: z.string().optional(),
  BIRDEYE_API_KEY_5: z.string().optional(),
  BIRDEYE_API_KEY_6: z.string().optional(),
  BIRDEYE_API_KEY_7: z.string().optional(),
  BIRDEYE_API_KEY_8: z.string().optional(),
  BIRDEYE_API_KEY_9: z.string().optional(),
  BIRDEYE_API_KEY_10: z.string().optional(),
  CMC_API_KEY_1: z.string().optional(),
  CMC_API_KEY_2: z.string().optional(),
  CMC_API_KEY_3: z.string().optional(),
  CMC_API_KEY_4: z.string().optional(),
  CMC_API_KEY_5: z.string().optional(),
  CMC_API_KEY_6: z.string().optional(),
  CMC_API_KEY_7: z.string().optional(),
  CMC_API_KEY_8: z.string().optional(),
  CMC_API_KEY_9: z.string().optional(),
  CMC_API_KEY_10: z.string().optional(),
});

export type EnvConfig = z.infer<typeof envSchema>;

const processEnv: Record<string, string | undefined> = {};
for (const key of Object.keys(envSchema.shape)) {
  (processEnv as any)[key] = (process.env as any)[key];
}

const parsed = envSchema.safeParse(processEnv);

if (!parsed.success) {
  console.error('❌ Invalid environment variables:', parsed.error.format());
  process.exit(1);
}

const baseConfig = parsed.data;

const buildApiKeyArray = (prefix: 'COINGECKO' | 'BIRDEYE' | 'CMC'): string[] => {
  const keys: string[] = [];
  for (let i = 1; i <= 10; i++) {
    const key = (baseConfig as any)[`${prefix}_API_KEY_${i}`];
    if (key) keys.push(key);
  }
  return keys;
};

export const config = {
  ...baseConfig,
  COINGECKO_API_KEYS: buildApiKeyArray('COINGECKO'),
  BIRDEYE_API_KEYS: buildApiKeyArray('BIRDEYE'),
  CMC_API_KEYS: buildApiKeyArray('CMC'),
};
