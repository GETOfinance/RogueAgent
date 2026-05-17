import dotenv from 'dotenv';
dotenv.config();

import { zgInferenceService } from '../src/services/0g-inference.service';
import { zgStorageService } from '../src/services/0g-storage.service';
import { zgFinetuningService } from '../src/services/0g-finetuning.service';
import { zgMemoryService } from '../src/services/0g-memory.service';

async function main() {
  console.log('\n🧪 Testing 0G Infrastructure Integration\n');
  console.log('='.repeat(50));

  // 1. Test 0G Inference
  console.log('\n📡 [1/4] Testing 0G Inference Service...');
  await zgInferenceService.initialize();
  if (zgInferenceService.isInitialized()) {
    console.log('   ✅ 0G Inference initialized');
    console.log(`   Model: ${zgInferenceService.getModel()}`);

    try {
      const result = await zgInferenceService.chat([
        { role: 'system', content: 'You are a crypto trading analyst.' },
        { role: 'user', content: 'What is the current BTC market sentiment? Respond in one sentence.' },
      ]);
      console.log(`   ✅ Inference response: ${result.content.substring(0, 100)}...`);
      console.log(`   Usage: ${result.usage?.input_tokens} in / ${result.usage?.output_tokens} out`);
    } catch (err: any) {
      console.log(`   ❌ Inference call failed: ${err.message}`);
    }
  } else {
    console.log('   ⚠️ 0G Inference not initialized (check ZG_COMPUTE_PRIVATE_KEY)');
  }

  // 2. Test 0G Storage
  console.log('\n💾 [2/4] Testing 0G Storage Service...');
  await zgStorageService.initialize();
  if (zgStorageService.isInitialized()) {
    console.log('   ✅ 0G Storage initialized');

    try {
      const testData = Buffer.from('RogueAgent 0G Storage Test - ' + new Date().toISOString());
      const url = await zgStorageService.uploadBuffer(testData, 'test/0g-storage-test.txt', 'text/plain');
      console.log(`   ✅ Upload successful: ${url}`);
    } catch (err: any) {
      console.log(`   ❌ Storage upload failed: ${err.message}`);
    }
  } else {
    console.log('   ⚠️ 0G Storage not initialized (check ZG_STORAGE_PRIVATE_KEY)');
  }

  // 3. Test 0G Memory
  console.log('\n🧠 [3/4] Testing 0G Memory Service...');
  if (zgStorageService.isInitialized()) {
    try {
      const rootHash = await zgMemoryService.storeTradeMemory({
        symbol: 'BTC',
        direction: 'LONG',
        entryPrice: 67500,
        exitPrice: 68200,
        pnl: 1.04,
        confidence: 0.92,
        outcome: 'win',
      });
      if (rootHash) {
        console.log(`   ✅ Trade memory stored — rootHash: ${rootHash}`);
      }
    } catch (err: any) {
      console.log(`   ❌ Memory store failed: ${err.message}`);
    }
  } else {
    console.log('   ⚠️ 0G Memory requires 0G Storage');
  }

  // 4. Test 0G Fine-tuning
  console.log('\n🎯 [4/4] Testing 0G Fine-tuning Service...');
  await zgFinetuningService.initialize();
  if (zgFinetuningService.isInitialized()) {
    console.log('   ✅ 0G Fine-tuning initialized');
    console.log(`   Provider: ${process.env.ZG_FINETUNING_PROVIDER}`);
    console.log(`   Model: ${process.env.ZG_FINETUNING_MODEL}`);
  } else {
    console.log('   ⚠️ 0G Fine-tuning not initialized (check ZG_COMPUTE_PRIVATE_KEY and ZG_FINETUNING_PROVIDER)');
  }

  console.log('\n' + '='.repeat(50));
  console.log('🧪 0G Integration Test Complete\n');
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Test failed:', err);
    process.exit(1);
  });
