import * as fs from 'fs';
import * as path from 'path';
import { binanceService } from '../src/services/binance.service';
import { proChartService } from '../src/services/pro-chart.service';
import { callVisionLLM, createVisionMessage } from '../src/services/vision-llm.service';
import { zgInferenceService } from '../src/services/0g-inference.service';

async function testChartVision() {
  console.log('\n📊 Testing Chart Vision via 0G Inference\n');

  await zgInferenceService.initialize();
  if (!zgInferenceService.isInitialized()) {
    console.error('❌ 0G Inference not initialized');
    process.exit(1);
  }

  const symbol = 'BTCUSDT';
  const interval = '1h';

  console.log(`Fetching ${symbol} OHLCV data...`);
  const ohlcv = await binanceService.getOHLCV(symbol, interval, 100);
  console.log(`Got ${ohlcv.length} candles`);

  console.log('Generating chart...');
  const chartResult = await proChartService.generateCandlestickChart(
    ohlcv,
    symbol,
  );
  const chartBuffer = Buffer.from(chartResult.base64, 'base64');

  const outputDir = path.join(__dirname, 'test-output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const chartPath = path.join(outputDir, `chart-${symbol}-${Date.now()}.png`);
  fs.writeFileSync(chartPath, chartBuffer);
  console.log(`Chart saved to: ${chartPath}`);

  const base64Image = chartBuffer.toString('base64');
  const prompt = 'Analyze this cryptocurrency chart. What do you see? Describe the trend, key levels, and any technical patterns.';

  console.log('\nSending chart to 0G Inference for analysis...');
  const visionMsg = createVisionMessage(prompt, base64Image);
  const analysis = await callVisionLLM([visionMsg]);

  console.log('\n📝 LLM Analysis:\n');
  console.log(analysis);

  console.log('\n✅ Chart Vision test complete!');
}

testChartVision()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Test failed:', err);
    process.exit(1);
  });
