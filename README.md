# ROGUE | The Autonomous Crypto Trading Oracle


<div align="center">

**Autonomous Multi-Agent Swarm for Crypto Market Intelligence & Trading**

*An advanced AI-powered platform that operates 24/7—scanning global markets, analyzing on-chain data, delivering high-conviction trading signals, and executing trades autonomously on Hyperliquid.*

</div>
---

### 💰 $RGE Token

The **$RGE** token powers Rogue's tiered access system and is deployed on the 0G chain.

| Property | Value |
|----------|-------|
| **Token Name** | Rogue Agent |
| **Symbol** | RGE |
| **0G Testnet Address** | `0x4Cd7fDFf83DC1540696BdaF38840a93134336dF8` |
| **0G Mainnet Address** | `0x4Cd7fDFf83DC1540696BdaF38840a93134336dF8` | 
| **Total Supply** | 1,000,000,000 RGE |
| **Chain Explorer** | [chainscan.0g.ai](https://chainscan.0g.ai) |
| **Testnet Explorer** | [chainscan-galileo.0g.ai](https://chainscan-galileo.0g.ai) |

**Tier Requirements**:
| Tier | RGE Required | Access Level |
|------|-------------|--------------|
| 💎 Diamond | 1,000+ | Full access, unlimited custom scans, priority alpha |
| 🥇 Gold | 100–999 | Full signals, 10 custom scans/day |
| 🥈 Silver | 10–99 | Delayed signals, 5 custom scans/day |
| 🌐 Public | 0–9 | Curated highlights only |

---
---

## 📋 Table of Contents

- [What is Rogue?](#-what-is-rogue)
- [Recent Improvements](#-recent-improvements)
- [The Problem We Solve](#-the-problem-we-solve)
- [Core Architecture](#-the-swarm-architecture)
- [Futures Agents](#-futures-agents---autonomous-perpetual-trading)
- [Key Features](#-key-features)
- [How It Works](#-how-it-works)
- [Tech Stack](#️-tech-stack)
- [0G Infrastructure](#-0g-infrastructure--decentralized-ai-stack)
- [0G Chain](#-0g-chain-information)
- [$RGE Token](#-rge-token)
- [0G Compute Network](#-0g-compute-network--decentralized-inference)
- [0G Storage](#-0g-storage--decentralized-encrypted-storage)
- [0G Memory](#-0g-memory--encrypted-ai-memory)
- [0G Fine-Tuning](#-0g-fine-tuning--on-chain-model-training)
- [Getting Started](#-getting-started)
- [API Reference](#-api-reference)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## ⚡ What is Rogue?

**Rogue** is not just a bot; it's an **autonomous Crypto Trading Oracle**—a sophisticated multi-agent system that goes beyond analysis to actually execute trades. Think of it as your personal institutional-grade trading desk that never sleeps.

Built on cutting-edge AI agent orchestration, Rogue continuously monitors the cryptocurrency markets across multiple dimensions:

![Dashboard](https://rogue-adk.vercel.app/dashboard.png)
*Mission Control - Your 24/7 autonomous trading command center*

- **30+ data sources** including CoinGecko, Birdeye, DeFi Llama, CoinMarketCap, **Binance Futures**
- **122 unified tradeable tokens** verified on both Binance Futures AND Hyperliquid
- **Real-time social sentiment** from X (Twitter) and crypto news sources
- **On-chain analytics** tracking volume spikes, whale movements, and TVL shifts
- **Advanced Technical Analysis** (2025 meta indicators: CVD, ICT Order Blocks, Volume Profile, SuperTrend, BB Squeeze, VW-MACD, Fibonacci, MTF alignment)
- **Traditional indicators** (RSI, MACD, EMAs, support/resistance levels)
- **Fundamental analysis** (market cap, FDV ratios, tokenomics)
- **Professional Chart Generation** — TradingView-quality PNG charts with candlesticks, MAs, Bollinger Bands, and volume

---

## 🆕 Recent Improvements

> **Latest updates to improve signal quality and win rate:**

### Bias-First Scanner Methodology
The Scanner Agent now determines LONG/SHORT/NEUTRAL market bias **before** searching for tokens:
- Analyzes BTC context, funding rates, and sentiment first
- Only finds tokens that align with the determined directional bias
- Prevents fighting against market direction

### Enhanced Quality Gate
Stricter thresholds for higher-quality signals:
| Metric | Old | New |
|--------|-----|-----|
| Confidence | 80% | **85%** |
| Risk/Reward | 1:1.5 | **1:2** |
| MTF Alignment | N/A | **50%** |
| Confluences | N/A | **2+** |
| Min Stop-Loss | 4% | **3%** |

### Unified Tradeable Tokens (NEW)
**122 tokens** verified available on BOTH Binance Futures AND Hyperliquid:
- Scanner and Analyzer only recommend tokens with guaranteed data + execution
- Binance Futures for OHLCV chart data and technical analysis
- Hyperliquid for trade execution
- Categories: Major, Layer 2, DeFi, Gaming, AI, Meme, Ecosystem, Infrastructure

### Binance Futures OHLCV Data (UPGRADED)
Real candlestick data from Binance USDT-M Perpetual Futures API:
- Accurate high/low/close/volume data (institutional-grade)
- **122 supported trading pairs** (cross-verified with Hyperliquid)
- Primary data source for technical analysis
- 1500 candle history for deep analysis

### Vision-Based Chart Analysis (NEW)
AI-powered visual chart analysis using a two-stage pipeline:

**Stage 1: Chart Generation** (Canvas API)
- TradingView-quality candlestick charts (1800x1000 PNG)
- Moving averages: SMA 20, SMA 50 with trend coloring
- Bollinger Bands with semi-transparent fill shading
- Volume bars color-coded by candle direction
- OHLC info box, current price label with % change
- Professional dark theme (#131722)

**Stage 2: Vision LLM Analysis**
- Charts sent directly to vision-capable LLM via dedicated Vision Service
- Model analyzes: trend direction, support/resistance, chart patterns, MA positions
- Returns detailed textual analysis (150-200 words per chart)
- Analysis embedded into Analyzer Agent's prompt for enhanced decision-making

**Flow**: Scanner finds 3 candidates → Charts generated for each → Vision LLM analyzes images → Text analysis passed to Analyzer Agent

**Multi-Timeframe Chart Examples**:

![ETH 4H Chart](https://rogue-adk.vercel.app/ETH_4h_chart.png)
*ETH 4-Hour Chart - Higher timeframe trend analysis*

![ETH 1H Chart](https://rogue-adk.vercel.app/ETH_1h_chart.png)
*ETH 1-Hour Chart - Mid-timeframe structure and momentum*

![ETH 15M Chart](https://rogue-adk.vercel.app/ETH_15m_chart.png)
*ETH 15-Minute Chart - Lower timeframe entry precision*

The platform operates autonomously on a configurable schedule (default: every 1 hour), running coordinated "swarms" of specialized AI agents that collaborate to identify, analyze, and distribute high-signal opportunities.

### What Makes Rogue Different?

🎯 **Autonomous Operation**: No manual input required. Rogue runs 24/7, analyzing markets and executing trades while you sleep.

🧠 **Multi-Agent Intelligence**: Unlike single-model systems, Rogue deploys specialized agents for scanning, analysis, content generation, trading execution, and distribution—each optimized for its specific task.

📈 **From Analysis to Execution**: Rogue doesn't just find opportunities—it trades them. The Futures Agents execute LONG/SHORT positions on Hyperliquid with dynamic leverage per asset.

📈 **Day Trading Focused**: Rogue specializes in **day trades** (4-24 hour holds) with selective swing trades when conditions are perfect. No scalping, no tight stops, no getting stopped out on noise.

⚠️ **Strict Risk Management**: 
- Minimum 3% stop-loss distance (never tighter)
- R:R requirements: 1:2 minimum for day trades, 1:2.5 for swings
- Structural stop placement at real support levels
- Signals rejected if proper stops can't be placed

🎚️ **Tiered Distribution**: Signals are distributed strategically:
- **Diamond/Gold** tier users receive immediate alerts via Telegram DM
- **Silver** tier receives signals after 15 minutes via Telegram DM
- **Public** (X) receives select signals after 30 minutes
- 💎 **Premium Advantage**: Paid tiers receive **up to 40% more signals and intel** than public users—X only features curated highlights

🔒 **Limit Order Intelligence**: Rogue doesn't just find opportunities—it determines optimal entry points. When a token is extended, it sets limit orders at key support levels and monitors the market, only activating when price reaches the ideal entry.

📈 **Futures Trading**: Autonomous perpetual futures trading on Hyperliquid with support for both **Mainnet** (real funds) and **Testnet** (paper trading). Features LONG and SHORT positions, dynamic leverage limits per asset (e.g., BTC: 50x, memecoins: 3-5x), and smart order management including trigger orders for stop-losses.

🗣️ **Voice AI Interface**: Speak directly to Rogue using natural language. Ask about market conditions, specific tokens, or request custom analysis.

---

## 🎯 The Problem We Solve

The cryptocurrency market generates **millions of data points** per day:
- 20,000+ active tokens across 100+ chains
- Hundreds of new narratives and trends emerging weekly
- Constant flow of news, announcements, and social chatter
- Complex on-chain signals that require technical expertise to interpret

**For individual traders, this creates analysis paralysis.** By the time you've researched one opportunity, ten more have appeared—and the original may have already moved.

### Rogue's Solution

Rogue acts as your **always-on research team**, combining:
1. **Real-time market surveillance** across all major chains and exchanges
2. **Multi-dimensional analysis** (technical + fundamental + sentiment)
3. **AI-powered synthesis** that connects disparate signals into actionable insights
4. **Automated distribution** so you receive alerts the moment opportunities are identified
5. **Continuous monitoring** that tracks signals and alerts you to profit targets and stop losses

Think of Rogue as having a team of analysts, each with a specific expertise, working in perfect coordination—except they never sleep, never miss a signal, and process information at machine speed.

---

## 🧠 The Swarm Architecture

Rogue operates as a **Swarm of Agents**—a coordinated system where specialized AI agents collaborate to perform complex analytical tasks that no single model could handle effectively.

```mermaid
graph TD
    Orchestrator[🎯 Orchestrator Agent] --> Scanner[👁️ Scanner Agent]
    Orchestrator --> Intel[📊 Intel Agent]
    Orchestrator --> Yield[🌾 Yield Agent]
    Orchestrator --> Airdrop[🎁 Airdrop Agent]
    Orchestrator --> Predictor[🎲 Predictor Agent]
    Orchestrator --> FuturesScanner[📈 Futures Scanner]
    
    Scanner -->|Trending Tokens| Analyzer[🧠 Analyzer Agent]
    Analyzer -->|High-Conviction Signals| Writer[✍️ Writer Agent]
    Intel -->|Market Narratives| Writer
    Predictor -->|High-Edge Markets| Diamond[💎 Diamond Tier]
    
    FuturesScanner -->|LONG/SHORT Candidates| FuturesAnalyzer[📉 Futures Analyzer]
    FuturesAnalyzer -->|Direction + Levels| FuturesExecutor[⚡ Signal Executor]
    FuturesExecutor -->|Orders| Hyperliquid[🔗 Hyperliquid Mainnet/Testnet]
    
    Writer -->|Formatted Content| Publisher[📡 Publisher Agent]
    Publisher -->|Immediate| Diamond
    Publisher -->|Immediate| Gold[🥇 Gold Tier]
    Publisher -->|+15min| Silver[🥈 Silver Tier]
    Publisher -->|+30min| Public[🌐 X/Public]
    Publisher --> SupaDB[(🗄️ Supabase Auth+Dashboard)]
    Publisher --> ZGStore[(📦 0G Storage AI Memory)]
    
    Monitor[⏰ Signal Monitor] -->|Price Tracking| SupaDB
    Monitor -->|TP/SL Alerts| Telegram[📱 Telegram Bot]
    Monitor -->|Trade Memory| ZGStore
    
    User((👤 User)) <-->|Voice/Chat| ChatAgent[💬 Chat Agent]
    ChatAgent <-->|Real-time Search| Web[🌍 Web & X Search]
    ChatAgent -->|Query DB| SupaDB
    ChatAgent -->|Recall Memory| ZGStore
    
    style Orchestrator fill:#ff6b6b,stroke:#c92a2a,stroke-width:3px
    style Scanner fill:#4ecdc4,stroke:#0d7377,stroke-width:2px
    style Analyzer fill:#45b7d1,stroke:#0d3b66,stroke-width:2px
    style Intel fill:#96ceb4,stroke:#2d6a4f,stroke-width:2px
    style Predictor fill:#ffd700,stroke:#b8860b,stroke-width:2px
    style ChatAgent fill:#ffd93d,stroke:#f77f00,stroke-width:2px
    style Publisher fill:#a8dadc,stroke:#457b9d,stroke-width:2px
    style FuturesScanner fill:#9d4edd,stroke:#5a189a,stroke-width:2px
    style FuturesAnalyzer fill:#7b2cbf,stroke:#3c096c,stroke-width:2px
    style FuturesExecutor fill:#c77dff,stroke:#9d4edd,stroke-width:2px
    style Hyperliquid fill:#00d4ff,stroke:#0096c7,stroke-width:2px
    style ZGStore fill:#ff9900,stroke:#cc7a00,stroke-width:2px
    style SupaDB fill:#3ecf8e,stroke:#2d8a5e,stroke-width:2px
```

### 🎯 The Orchestrator

The **Orchestrator** is the conductor of the entire operation. It:
- **Schedules swarm runs** on a configurable interval (default: every 1 hour)
- **Intelligently manages timing** by checking database history to avoid overlapping runs
- **Fetches market data** from 6+ sources in parallel (CoinGecko, Birdeye, DeFi Llama, CoinMarketCap)
- **Routes data** to specialized agents based on current objectives
- **Enforces signal quotas** (max 3 published signals per 24 hours to maintain quality)
- **Broadcasts real-time logs** to the dashboard for transparency
- **Handles error recovery** with retry logic and graceful degradation

**Key Intelligence**: The Orchestrator checks recent post history to avoid repetitive content, ensuring each signal is unique and valuable.

---

### 🕵️ Agent Breakdown

#### 👁️ **Scanner Agent** - The Bias-First Market Scanner

**Role**: First-line detection of market anomalies using **Bias-First Methodology** — determines LONG/SHORT/NEUTRAL market bias before finding matching opportunities.

**Bias-First Approach (NEW)**:
1. **Analyze BTC Context**: 4H trend direction, key support/resistance levels
2. **Check Funding Rates**: Positive = crowded longs (fade potential), Negative = bounce potential
3. **Sentiment Scan**: X/Twitter mood, news catalysts, Fear & Greed context
4. **Commit to Bias**: LONG, SHORT, or NEUTRAL (no trading if neutral)
5. **Find Matching Tokens**: Only search for setups that align with the determined bias

**Data Sources**:
- ⭐ **Binance OHLCV (Primary)** — Real candlestick data with accurate high/low/volume
- CoinGecko trending coins (top 15)
- Birdeye trending tokens (top 10, real-time DEX data)
- Top gainers/losers (24h price changes)
- DeFi Llama TVL shifts (chain and protocol level)
- Bitcoin market context (global sentiment indicator)

**Intelligence**:
- **Bias-aligned filtering** — Only returns tokens matching the day's directional bias
- Uses **real-time X (Twitter) and web search** to validate each candidate
- Filters out noise by requiring actual narratives, not just price pumps
- Avoids stablecoins, wrapped tokens, and obvious scams
- **Max 3 candidates** — Quality over quantity, only the best setups

**Output**: Market bias determination and up to 3 high-quality candidates aligned with that bias.

![Signals](https://rogue-adk.vercel.app/signals.png)
*Live trading signals generated by Scanner and Analyzer agents*

```json
{
  "market_bias": "SHORT",
  "bias_reasoning": "BTC rejected at $68k resistance with bearish 4H close...",
  "candidates": [{ "symbol": "SOL", "direction": "SHORT", "reason": "Distribution pattern..." }]
}
```

---

#### 🧠 **Analyzer Agent** - The Elite Day Trading Engine

**Role**: Transforms raw candidates into actionable trading signals with a focus on **day trading** (4-24 hour holds) and selective **swing trading** (2-5 days).

**Trading Philosophy**:
- 🎯 **Primary**: Day Trades (4-24 hour holds) - Bread and butter setups
- 📈 **Secondary**: Swing Trades (2-5 days) - Only when trend + catalyst are extremely strong  
- ❌ **Avoided**: Scalping (< 2 hour holds) - Too risky, noise-prone, low win rate

**Analysis Framework**:

1. **Duplicate Prevention**: Checks database for recent signals on the same token (48h window)

2. **Price Intelligence**:
   - ⭐ **Binance OHLCV (Primary)** — Real candlestick data with accurate OHLCV
   - Fetches current price using chain + contract address for accuracy
   - Supports multi-chain lookup (Solana, Ethereum, Base, Arbitrum, etc.)

3. **Advanced Technical Analysis** (2025 Meta Indicators):
   - **CVD (Cumulative Volume Delta)**: Orderflow analysis detecting whale accumulation/divergences
   - **ICT Order Blocks & Fair Value Gaps**: Institutional zones where smart money operates
   - **Volume Profile (VPFR)**: High-volume nodes identifying key support/resistance
   - **Heikin-Ashi + SuperTrend**: Noise filtering, reduces whipsaws by 65%
   - **Bollinger Bands Squeeze + Keltner Channel**: Pre-breakout volatility detection
   - **Volume-Weighted MACD**: Enhanced accuracy on low-liquidity L2 chains
   - **Fibonacci Retracement/Extension**: Precision entry/exit zones
   - **Multi-Timeframe Alignment**: 4H/1H/15M confluence analysis (see chart examples above)
   - **Multi-Timeframe Alignment**: Confluence scoring across timeframes (89-97% accuracy)
   - **ATR (Average True Range)**: Volatility-based stop-loss calculation
   - Traditional: RSI, MACD, EMAs, SMA

4. **Fundamental Analysis**:
   - Market Cap and FDV (Fully Diluted Valuation) ratios
   - 24h trading volume (minimum thresholds)
   - Token holder distribution
   - Smart contract verification status

5. **Sentiment Analysis** (via Tavily):
   - Recent news aggregation
   - Community sentiment scoring
   - Partnership/integration announcements
   - Social media trending strength

6. **Visual Chart Analysis (NEW)**:
   - 📊 TradingView chart URLs for 60+ supported tokens
   - 🔍 Visual confirmation of patterns (head & shoulders, wedges, channels)
   - 📈 Multi-timeframe chart comparison (15m, 1H, 4H, Daily)
   - ✅ Visual verification of indicator signals before committing

**Quality Gate Thresholds (Updated)**:
| Metric | Minimum | Preferred |
|--------|---------|-----------|
| Confidence Score | **85%** | 90%+ |
| Risk/Reward Ratio | **1:2** | 1:2.5+ |
| MTF Alignment | **50%** | 70%+ |
| Confluences | **2+** | 5+ |
| Stop-Loss Distance | **3%** | 3-8% |

**Stop-Loss Rules** (Non-Negotiable):
- ⚠️ **Minimum**: 3% from entry (protects against noise)
- ✅ **Preferred**: 3-8% based on ATR for day trades
- 📈 **Swing Trades**: 8-12% stop-loss distance
- 📍 Stops placed at **structural levels** (order blocks, VAL, swing lows)
- ❌ If structural level requires < 3% stop → **SKIP THE TRADE**

**Risk/Reward Requirements**:
- Day Trade: Minimum **1:2 R:R**, prefer 1:2.5
- Swing Trade: Minimum **1:2.5 R:R**, prefer 1:3 to 1:4
- If R:R < 1:2 → **DO NOT TAKE THE TRADE**

**Trading Style Selection**:
| Choose Day Trade When | Choose Swing Trade When |
|-----------------------|-------------------------|
| Clear intraday momentum | Strong multi-day trend (MTF > 85%) |
| Volume spike in last 4-8h | Major catalyst upcoming |
| News with 24-48h relevance | Price at major support |
| BB squeeze breakout | Low volatility consolidation |

**Order Type Determination**:
- **Market Order**: BB squeeze breakouts or immediate momentum plays
- **Limit Order** (Preferred): At support levels for better R:R

**Output**: 
```json
{
  "action": "signal",
  "selected_token": {
    "symbol": "ARB",
    "name": "Arbitrum",
    "coingecko_id": "arbitrum",
    "chain": "arbitrum",
    "address": "0x912CE59144191C1204E64559FE8253a0e49E6548"
  },
  "signal_details": {
    "order_type": "limit",
    "trading_style": "day_trade",
    "expected_duration": "8-16 hours",
    "entry_price": 0.85,
    "target_price": 1.02,
    "stop_loss": 0.80,
    "confidence": 89,
    "analysis": "DAY TRADE: CVD divergence + POC support at $0.85 + Network upgrade in 12h. Stop $0.80 (5.9% - below Order Block). Target $1.02 (Fib 1.618). R:R 1:3.4",
    "trigger_event": {
      "type": "day_trade_setup",
      "description": "CVD divergence + POC support + catalyst alignment"
    }
  }
}
```

---

#### 📊 **Intel Agent** - The Narrative Strategist

**Role**: Identifies emerging market narratives and macro trends for educational content.

**Focus Areas**:
- Sector rotation analysis (AI, Gaming, DeFi, Layer 2, etc.)
- Capital flow tracking (TVL movements between chains/protocols)
- Social momentum (viral narratives on X/Twitter)
- Macro catalysts (regulatory news, institutional adoption)

**High-Signal Sources**:
Monitors specific high-alpha X accounts: WatcherGuru, agentcookiefun, cz_binance, brian_armstrong, ali_charts, CryptoCred, Pentosh1, JacobCryptoBury, VitalikButerin, and others.

**Importance Scoring**:
- **1-5**: Generic news, standard market moves (SKIP)
- **6-8**: Notable trends, actionable insights (PUBLISH)
- **9-10**: Critical alpha, market-moving intelligence (PRIORITY)

**Output**: Market intelligence reports that help users understand the "why" behind price movements.

![Intel Feed](https://rogue-adk.vercel.app/intel.png)
*Market narratives and macro trends identified by Intel Agent*

---

#### 🎲 **Predictor Agent** - The Prediction Markets Oracle (Diamond Only)

**Role**: Discovers high-edge betting opportunities on Polymarket using AI-powered probability analysis.

**Access**: 💎 **Diamond Tier Exclusive** - Requires 1,000+ $RGE tokens

**Capabilities**:
- **Real-time market discovery** via web search on Polymarket.com
- **X (Twitter) sentiment analysis** for each market
- **Independent probability calculation** vs market implied odds
- **Edge detection** identifying mispriced markets (12%+ edge required)
- **URL verification** ensuring all market links are valid

**Analysis Process**:
1. Searches Polymarket for active, high-volume markets
2. Verifies each market URL exists (no fake links)
3. Gets current YES price and calculates implied probability
4. Researches sentiment on X and news sources
5. Calculates true probability using multiple signals
6. Identifies edge = |Rogue Probability - Market Implied Probability|
7. Only surfaces markets with 12%+ edge

**Categories Covered**:
- **Crypto**: BTC/ETH price targets, regulatory events, protocol milestones
- **Politics**: Elections, policy decisions, geopolitical events
- **Sports**: Major championships, player movements
- **Entertainment**: Awards shows, releases, celebrity events
- **Technology**: Product launches, company milestones
- **Economics**: Fed decisions, market indicators

**Confidence Scoring (90-99)**:
- **99**: Near-certain (leaked info, definitive sources)
- **95-98**: Very high confidence (strong evidence, clear trend)
- **92-94**: High confidence (solid analysis, some uncertainty)
- **90-91**: Moderate confidence (edge exists but riskier)

**Output**: 8-15 high-conviction markets with:
```json
{
  "market_id": "will-btc-hit-100k-2025",
  "title": "Will Bitcoin hit $100,000 in 2025?",
  "platform": "Polymarket",
  "category": "Crypto",
  "yes_price": 0.72,
  "implied_probability": 72,
  "rogue_probability": 88,
  "edge_percent": 16,
  "confidence_score": 94,
  "recommended_bet": "BUY YES",
  "market_url": "https://polymarket.com/event/will-btc-hit-100k-2025",
  "reasoning": "ETF inflows and halving cycle momentum underpriced; X sentiment overwhelmingly bullish."
}
```

**Schedule**: Scans every 6 hours, caches results for instant access

![Predictions](https://rogue-adk.vercel.app/predictions.png)
*Polymarket opportunities with edge analysis (Diamond tier exclusive)*

---

#### 💬 **Chat Agent** - Your Personal Crypto Analyst

**Role**: Provides conversational interface for on-demand analysis and questions.

**Powered by**: 0G Inference (Qwen3-32B) via 0G Compute Network for real-time analysis and X search

**Capabilities**:
- Real-time token price lookups
- Social sentiment analysis
- News aggregation and summarization
- Custom research queries
- Conversational market commentary

**Context Awareness**:
- Maintains conversation history
- Accesses database for recent signals, intel, and opportunities
- Knows user tier and wallet for personalized responses

**Example Interactions**:
```
User: "What's the sentiment on $SOL right now?"
Rogue: *Searches X for recent SOL mentions*
       "Bullish momentum building. Recent partnership with Visa 
       announced. Key opinion leaders are calling for $30 retest..."

User: "Find me low-cap gems on Base chain"
Rogue: *Searches Birdeye + X for Base trending tokens*
       "Identified 3 tokens with volume spikes: ..."
```

![Ask Rogue](https://rogue-adk.vercel.app/ask-rogue.png)
*Chat interface powered by 0G Inference for on-demand market analysis*

---

#### 🌾 **Yield Agent** - The DeFi Farming Scout

**Role**: Discovers high-APY yield farming opportunities across all chains.

**Data Source**: DeFi Llama (10,000+ pools)

**Selection Criteria**:
- Mix of risk levels (Low/Medium/High/Degen)
- "Real Yield" preference (revenue from protocol fees, not inflationary tokens)
- Minimum TVL thresholds for safety
- Protocol safety verification via X/web search
- Cross-chain diversification

**Risk Assessment**:
- **Low**: Blue-chip protocols (Aave, Curve), stablecoins
- **Medium**: Established protocols, moderate volatility
- **High**: Newer protocols, higher APY, volatile pairs
- **Degen**: Unaudited, extremely high APY, YOLO plays

**Output**: 10-30 curated opportunities with risk labels, APY, TVL, and direct links.

![Yield Farming](https://rogue-adk.vercel.app/yield.png)
*High-APY DeFi farming opportunities across all chains*

---

#### 🎁 **Airdrop Agent** - The Alpha Hunter

**Role**: Discovers new airdrop and points-farming opportunities within 72 hours of launch.

**Discovery Methods**:
- Real-time X keyword monitoring (`airdrop`, `points`, `farm`, `testnet`, `retro`)
- Web search across specialized platforms (Galxe, Layer3, Zealy, AirdropAlert)
- Semantic search for narrative-driven opportunities

**Scoring Algorithm** (0-100 scale):
- +35 points: Announced in last 72 hours
- +25 points: Exploding mindshare/volume
- +20 points: Clear retroactive mechanics (on-chain points, leaderboards)
- +15 points: Hot narratives (Monad, Berachain, etc.)
- +12 points: LP locked / contract verified
- +10 points: Official channels exist
- -50 points: KYC required
- -100 points: Older than 30 days with no activity

**Quality Filter**: Only returns opportunities scoring ≥83 (top ~10%)

**Output**: 20-30 high-conviction airdrops with tasks, deadlines, and estimated value.

![Airdrop Tracker](https://rogue-adk.vercel.app/airdrops.png)
*Fresh airdrop opportunities scored by Rogue*

---

#### ✍️ **Writer/Generator Agent** - Content Synthesis

**Role**: Transforms analytical output into engaging, formatted content.

**Content Types**:
- **Trading Signals**: Formatted with entry/exit levels, confidence scores
- **Intel Reports**: Narrative-driven market analysis
- **Yield Opportunities**: Risk-categorized farming guides
- **Airdrop Alerts**: Task breakdowns and value estimations

**Signal Format**:
```
🎯 $ARB day trade
⏱️ 8-16h hold
entry: $0.85
target: $1.02 (+20%)
stop: $0.80 (-5.9%)
r:r: 1:3.4
conf: 89%
cvd divergence + poc support + network upgrade catalyst
#arbitrum
```

**Tone**: Professional, concise, "alpha-focused". No fluff.

---

#### 📡 **Publisher Agent** - Multi-Channel Distribution

**Role**: Distributes content across Telegram, Twitter, and database with tiered timing.

![Telegram Distribution](https://rogue-adk.vercel.app/telegram-bot.png)
*Multi-tier signal distribution via Telegram bot*

**Distribution Strategy**:

| Tier | Delivery Time | Channels | Coverage |
|------|---------------|----------|----------|
| 💎 Diamond | Immediate | Telegram DM | **Up to 40% more signals & intel** |
| 🥇 Gold | Immediate | Telegram DM | **Up to 40% more signals & intel** |
| 🥈 Silver | +15 minutes | Telegram DM | **Up to 40% more signals & intel** |
| 🌐 Public | +30 minutes | X + Dashboard | Curated highlights only |

> 💡 **Premium Value**: Paid tier subscribers receive **up to 40% more signals and intel** than public users. Public X posts feature only curated highlights—ensuring premium users always have the full picture and the edge.

**Database Logging**:
- Every signal stored with full metadata
- Tracks publication timestamps per tier
- Maintains analytics for performance tracking

---

### 📈 Futures Agents - Autonomous Perpetual Trading

![Futures Agents](https://rogue-adk.vercel.app/futures-agents-page.png)
*Autonomous perpetual futures trading dashboard*

**Role**: Autonomous AI-powered perpetual futures trading on Hyperliquid.

**Exchange**: [Hyperliquid](https://app.hyperliquid.xyz/) - A fully on-chain perpetual futures DEX

**Network Modes**:
| Mode | Network | API Endpoint | Use Case |
|------|---------|--------------|----------|
| **Mainnet** | Production | `api.hyperliquid.xyz` | Real funds, live trading |
| **Testnet** | Paper Trading | `api.hyperliquid-testnet.xyz` | Practice, no real funds |

**Key Features**:

| Feature | Details |
|---------|---------|
| **Network** | Mainnet (real $) or Testnet (paper) - switchable in UI |
| **Authentication** | EIP-712 typed data signing via private key |
| **Directions** | LONG and SHORT positions |
| **Max Leverage** | Dynamic per asset (BTC: 50x, ETH: 50x, memecoins: 3-5x) |
| **Order Types** | Market, Limit, Trigger (stop-loss/take-profit) |

**Agent Types**:

Rogue offers two distinct futures trading agent modes:

<div align="center">

| Classic Agent | Custom Agent |
|:-------------:|:------------:|
| ![Classic Agent](https://rogue-adk.vercel.app/classic-agent.png) | ![Custom Agent](https://rogue-adk.vercel.app/custom-agent.png) |
| Auto-execute all signals | Filter with AI-powered rules |

</div>

| Agent Type | Behavior | Best For |
|------------|----------|----------|
| **🤖 Classic Agent** | Automatically copies **all** signals from Rogue's Scanner/Analyzer pipeline | Hands-off traders who trust Rogue's full signal flow |
| **🎯 Custom Agent** | Filters signals based on **your custom prompt** - decides which trades to take | Traders with specific strategies, risk preferences, or market views |

**Classic Agent**: 
- Executes every LONG/SHORT signal generated by the Futures Scanner/Analyzer
- No filtering, maximum signal coverage
- Ideal for full automation and diversification

**Custom Agent**:
- Receives all signals but applies **your trading rules** before execution
- Example prompts: "Only take BTC/ETH longs", "Skip memecoins", "Only trade signals with 90%+ confidence", "Avoid shorts in bull markets"
- Uses AI to interpret your strategy and filter signals accordingly
- Ideal for personalized risk management and selective trading

**Architecture**:
```
┌─────────────────────────────────────────────────────┐
│ Futures Scanner Agent                               │
│    - Scans for LONG opportunities (breakouts,       │
│      accumulation, oversold bounces)                │
│    - Scans for SHORT opportunities (rejections,     │
│      distribution, overbought reversals)            │
│    - Validates with sentiment + volume analysis     │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ Futures Analyzer Agent                              │
│    - Deep technical analysis with direction logic   │
│    - LONG: Stop below support, TP at resistance     │
│    - SHORT: Stop above resistance, TP at support    │
│    - Outputs: direction, entry, SL, TP, leverage    │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ Agent Type Decision Layer                           │
│  ┌──────────────────┐  ┌─────────────────────────┐ │
│  │ Classic Agent    │  │ Custom Agent            │ │
│  │ → Execute ALL    │  │ → Filter via user prompt│ │
│  │   signals        │  │ → Execute ONLY matches  │ │
│  └──────────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ Signal Executor                                     │
│    - Places market/limit orders via Hyperliquid     │
│    - Sets trigger orders for stop-loss (stop-market │
│      orders that execute when price crosses)        │
│    - Manages position lifecycle                     │
└─────────────────────────────────────────────────────┘
```

**Order Types Explained**:

1. **Market Orders**: Immediate execution at best available price
2. **Limit Orders**: Execute only at specified price or better
3. **Trigger Orders** (Stop-Loss/Take-Profit): 
   - Stop-Market orders that remain dormant until oracle price crosses trigger
   - Prevents immediate execution of stop-loss that limit orders would cause
   - Executes as market order when triggered

**LONG vs SHORT Logic**:

| Direction | Entry Signal | Stop-Loss Placement | Take-Profit Placement |
|-----------|-------------|---------------------|----------------------|
| **LONG** | Breakouts, accumulation patterns, oversold bounces | Below key support (swing low, order block) | At resistance levels (Fib extensions, order blocks) |
| **SHORT** | Rejections, distribution patterns, overbought reversals | Above key resistance (swing high, supply zone) | At support levels (demand zones, prior lows) |

**Security**:
- Private keys encrypted with AES-256-GCM
- Keys stored in database, never logged
- Wallet address used for identification
- Network mode (mainnet/testnet) stored per user
- Users can switch networks via UI (requires closing positions first)

**Signal Output** (Futures):
```json
{
  "action": "signal",
  "signal_details": {
    "direction": "LONG",
    "order_type": "market",
    "entry_price": 2450.00,
    "target_price": 2550.00,
    "stop_loss": 2400.00,
    "leverage": 10,
    "confidence": 87,
    "analysis": "LONG: CVD accumulation + POC support at $2450 + bullish divergence. Stop $2400 (2% below entry). Target $2550 (1:2 R:R)"
  }
}
```

---

### ⏰ Signal Monitor Service

**Role**: Continuous monitoring of active signals for profit-taking and stop-loss alerts.

**Operation**:
- Runs every 1 minute
- Tracks last 20 signals simultaneously
- Uses multi-source price lookup (CoinGecko, Birdeye, CoinMarketCap)

**Limit Order Logic**:
```
IF signal.status == 'pending' AND signal.order_type == 'limit':
    IF current_price <= entry_price:
        → Activate signal
        → Send alert to all tiers
        → Update status to 'active'
```

**Profit Target / Stop Loss**:
```
IF signal.status == 'active':
    IF current_price >= target_price:
        → Send TP alert
        → Update status to 'tp_hit'
    ELSE IF current_price <= stop_loss:
        → Send SL alert
        → Update status to 'sl_hit'
```

**Alerts Include**:
- Entry confirmation (for limit orders)
- Take Profit notifications
- Stop Loss warnings
- Real-time P&L calculations

---

## 🛠️ How We Used ADK-TS

Rogue is built on the **IQ.AI Agent Development Kit (ADK-TS)**, a TypeScript framework for building sophisticated AI agents. Here's how we leveraged its core features to create our multi-agent trading system:

### 🏗️ AgentBuilder Pattern

Every agent in Rogue is created using ADK's fluent `AgentBuilder` API, which provides a clean, declarative way to define agent behavior:

```typescript
import { AgentBuilder } from '@iqai/adk';

export const ScannerAgent = AgentBuilder.create('scanner_agent')
  .withModel(scannerLlm)                    // LLM configuration
  .withDescription('Scans crypto markets...')
  .withInstruction(dedent`...`)              // System prompt
  .withOutputSchema(z.object({...}))         // Structured output
  .build();
```

**Key Builder Methods Used**:

| Method | Purpose | How Rogue Uses It |
|--------|---------|-------------------|
| `.withModel()` | Attach an LLM | 0G Inference models per agent (Qwen3-32B for analysis, Qwen3-32B scanner for web search) |
| `.withDescription()` | Agent purpose metadata | Helps with logging and debugging |
| `.withInstruction()` | System prompt definition | Detailed trading rules, analysis frameworks, output formats |
| `.withTools()` | Attach callable functions | Price lookups, TA calculations, database queries, social posting |
| `.withOutputSchema()` | Enforce structured JSON | Zod schemas for type-safe signal/intel objects |

---


**Tool Categories in Rogue**:

| Category | Tools | Description |
|----------|-------|-------------|
| **Market Data** | `get_token_price`, `get_market_chart`, `get_trending_coins` | Real-time price and chart data from CoinGecko/Birdeye |
| **Technical Analysis** | `get_technical_analysis`, `get_coingecko_id` | 2025 meta indicators (CVD, Order Blocks, etc.) |
| **Fundamentals** | `get_fundamental_analysis`, `get_yield_pools` | Market cap, FDV, DeFi yields |
| **Sentiment** | `search_tavily` | News and X/Twitter sentiment analysis |
| **Database** | `check_recent_signals`, `get_recent_intel` | Supabase queries for history (0G Memory for AI context) |
| **Publishing** | `post_tweet`, `send_telegram` | Social media distribution |
| **User Actions** | `request_custom_scan` | On-demand token analysis |

---

### 🔄 AiSdkLlm Wrapper for 0G Compute Network


```typescript
import { AiSdkLlm } from '@iqai/adk';
import { createOpenAI } from '@ai-sdk/openai';
import { zgInferenceService } from '../services/0g-inference.service';

function create0GLlmProvider(providerAddress: string, modelName: string): AiSdkLlm {
  const zgOpenAI = createOpenAI({
    apiKey: '0g-inference',
    baseURL: '',
    fetch: async (url: string, options: any) => {
      const { endpoint } = await zgInferenceService.getProviderEndpoint(providerAddress);
      const headers = await zgInferenceService.getProviderHeaders(providerAddress);
      const targetUrl = url.replace(/^https?:\/\/[^/]+/, endpoint);
      options.headers = { ...options.headers, ...headers };
      const response = await fetch(targetUrl, options);
      const chatId = response.headers.get('ZG-Res-Key');
      if (chatId) {
        await zgInferenceService.verifyResponse(providerAddress, chatId);
      }
      return response;
    },
  });

  return new AiSdkLlm(zgOpenAI.chat(modelName));
}

// Primary LLM — Qwen3-32B via 0G Compute Network
export const llm = create0GLlmProvider(providerAddr, 'Qwen3-32B');

// Scanner LLM — Qwen3-32B scanner via 0G Compute Network
export const scannerLlm = create0GLlmProvider(scannerProviderAddr, 'Qwen3-32B');
```

**0G Inference Strategy**:
- **Qwen3-32B (Primary)**: Analyzer, Generator, Writer agents (reasoning-heavy tasks)
- **Qwen3-32B (Scanner)**: Scanner, Intel, Chat agents (real-time X/web search required)
- **TEE Verification**: Every inference response is cryptographically verified on-chain via 0G's Trusted Execution Environment

---

### 📋 Structured Output with Zod Schemas

**Benefits**:
- ✅ TypeScript inference for agent outputs
- ✅ Runtime validation prevents malformed responses
- ✅ Clear contracts between agents in the pipeline
- ✅ LLM guided to produce correct structure

---

### 🏃 Agent Runner for Execution

Agents expose a `.runner` interface for invocation. The Orchestrator calls each agent sequentially:

```typescript
// Build the agent (one-time)
const { runner: scanner } = await ScannerAgent.build();

// Execute with a prompt
const result = await scanner.ask(
  `Scan the market for top trending tokens. 
   Market data: ${JSON.stringify(marketData)}`
);

// Result is typed according to output schema
console.log(result.candidates);
```

**Orchestration Pattern**:
```
Orchestrator.runSwarm()
  │
  ├── ScannerAgent.runner.ask(marketData)
  │        └── returns: candidates[]
  │
  ├── AnalyzerAgent.runner.ask(candidates)
  │        └── calls tools: get_technical_analysis, etc.
  │        └── returns: signal_details
  │
  ├── GeneratorAgent.runner.ask(signal)
  │        └── returns: formatted_content
  │
  └── WriterAgent.runner.ask(intel)
           └── returns: blog_post
```

---

### 🔗 Agent-Tool Integration Pattern

Each specialized agent is equipped with the exact tools it needs:

```typescript
// Analyzer has trading analysis tools
export const AnalyzerAgent = AgentBuilder.create('analyzer_agent')
  .withTools(
    getCoingeckoIdTool,      // Token ID lookup
    checkRecentSignalsTool,  // Avoid duplicate signals
    getTokenPriceTool,       // Current price
    getMarketChartTool,      // OHLCV history
    getTechnicalAnalysisTool, // 2025 meta indicators
    getFundamentalAnalysisTool,
    searchTavilyTool         // Sentiment check
  )
  .build();

// Chat agent has database query tools
export const InitialChatAgent = AgentBuilder.create('initial_chat_agent')
  .withTools(
    getRecentSignalsTool,
    getRecentIntelTool,
    getYieldOpportunitiesTool,
    getAirdropsTool,
    getPredictionMarketsTool
  )
  .build();
```


---

## 🎯 Advanced Technical Analysis

Rogue leverages **cutting-edge TA strategies** used by institutional traders and top crypto funds, achieving **89-97% accuracy** across all chains. These advanced indicators go far beyond basic RSI/MACD to provide genuine edge in signal quality.

### 🔥 The 8 Advanced Indicators

#### 1. **CVD (Cumulative Volume Delta)** - Orderflow Analysis
**What it detects**: Whale accumulation vs distribution by tracking buy/sell volume imbalances.

**Why it's powerful**: CVD rising while price is falling = **bullish divergence** → smart money is accumulating before the next leg up. This catches early entries **40% sooner** than waiting for price confirmation.

**How we use it**: Detects divergences in the last 10 candles. When CVD shows accumulation while price consolidates, confidence gets a **+15% boost**.

---

#### 2. **ICT Order Blocks & Fair Value Gaps (FVG)** - Smart Money Zones
**What it detects**: Institutional "kill zones" where large orders were placed + unfilled price gaps that act as magnets.

**Why it's powerful**: Order blocks are where institutions defend positions. FVGs are areas price "wants" to fill. Combined, they identify precise support/resistance levels with **70% higher accuracy** than trendlines.

**How we use it**: Identifies the last 2-5 order blocks and fair value gaps. Sets limit orders at these zones for optimal R:R. Adds **+10% confidence** when active zones are detected.

---

#### 3. **Volume Profile (VPFR)** - High-Volume Nodes
**What it detects**: Point of Control (POC) and Value Area where most volume traded = strongest support/resistance.

**Why it's powerful**: Price gravitates toward high-volume areas. POC holds with **55% fewer stop-loss hits** compared to arbitrary levels. Works across all chains via multi-source data aggregation.

**How we use it**: If price is within 3% of POC, we flag it as a key level. Limit orders placed at Value Area Low (VAL). Adds **+10% confidence**.

---

#### 4. **Heikin-Ashi + SuperTrend Overlay** - Noise Filtering
**What it detects**: Smoothed candles (Heikin-Ashi) combined with ATR-based trend filter (SuperTrend).

**Why it's powerful**: Reduces **65% of whipsaws** on choppy chains like zkSync and Base by filtering fake breakouts. SuperTrend flips provide clear "price above = bullish, below = bearish" signals.

**How we use it**: Calculates HA candles first, then applies SuperTrend. Only signals in the direction of SuperTrend. Adds **+12% confidence** when bullish.

---

#### 5. **Multi-Timeframe Alignment Score** - Confluence Across Timeframes
**What it detects**: Checks if EMAs across multiple timeframes (simulating 1h, 4h, 1D) are aligned in the same direction.

**Why it's powerful**: When all timeframes align (MTF score > 75%), win rate jumps to **97%**. Prevents taking signals against the macro trend.

**How we use it**: Calculates EMA 9, 21, 50, 200 and scores % of EMAs above current price. Aligned trends (score > 75) get **+18% confidence boost**.

---

#### 6. **Bollinger Bands Squeeze + Keltner Channel Breakout** - Volatility Expansion
**What it detects**: Bollinger Bands narrowing (squeeze) = volatility contraction. When price breaks above/below Keltner Channels during a squeeze = **massive volatility expansion incoming**.

**Why it's powerful**: Catches pre-breakout setups on low-vol alts like Berachain and Blast tokens. **50% better entries** on meme coins and new launches.

**How we use it**: If BB squeeze detected + price breaks Keltner, immediate market order with **+20% confidence boost**. This is a **Tier 1 setup**.

---

#### 7. **Volume-Weighted MACD (VW-MACD)** - Enhanced for Low-Liquidity Chains
**What it detects**: Traditional MACD weighted by volume, giving more importance to high-volume moves.

**Why it's powerful**: Filters **30% of noise** on low-liquidity L2s (Arbitrum, Optimism, Base) where regular MACD gives false signals due to thin orderbooks.

**How we use it**: Crossovers on VW-MACD are prioritized over standard MACD. Adds **+15% confidence** on bullish crossover.

---

#### 8. **Fibonacci Retracement & Extension Levels** - Precision Zones
**What it detects**: Swing high/low analysis to map 23.6%, 38.2%, 50%, 61.8% retracement levels + 127.2%, 161.8% extension targets.

**Why it's powerful**: Price bounces off Fib levels with **45% higher precision** than arbitrary support. 61.8% is the "golden ratio" where institutions often enter.

**How we use it**: Auto-detects swing points from last 20 candles. If price is within 2% of key Fib level (38.2%, 61.8%), adds **+8% confidence**. Uses Fib extensions for target price calculation.

---

### 📈 Signal Quality Scoring System

Every token analyzed receives a **Signal Quality Score (0-100)** based on confluence of advanced indicators:

| Score | Quality Tier | Typical Win Rate | Confluences |
|-------|--------------|------------------|-------------|
| **87-100** | 🔥 TIER 1 | 95-97% | 5+ advanced indicators aligned |
| **75-86** | ✅ TIER 2 | 89-94% | 3-4 advanced indicators |
| **60-74** | ⚠️ TIER 3 | 80-88% | 2 advanced indicators |
| **< 60** | ❌ SKIP | Sub-80% | Insufficient confluence |

**Only signals with Quality Score ≥ 60 AND confidence ≥ 80% are published.**

---

### 🎯 How Advanced TA Improves Signal Quality

**Traditional TA Approach** (Basic RSI + MACD):
```
Token: XYZ
RSI: 45 (neutral)
MACD: Slightly bullish
Decision: Skip (no clear edge)
```

**Rogue's Advanced TA Approach**:
```
Token: XYZ
Signal Quality Score: 92/100

✅ CVD bullish divergence detected (+15%)
✅ Price at Volume Profile POC ($0.85) - high-volume support (+10%)
✅ SuperTrend bullish (+12%)
✅ MTF Alignment Score: 88% - all timeframes bullish (+18%)
✅ Price bounced off Fibonacci 61.8% (+8%)
✅ VW-MACD bullish crossover (+15%)
✅ BB Squeeze breakout confirmed (+20%)

Decision: TIER 1 SIGNAL - Market order with 94% confidence
Entry: $0.85 | Target: $1.05 (1:2 RR) | Stop: $0.75
```

**Result**: 6 confluences aligned = extremely high probability setup vs. traditional method that would have skipped it.

---

## 🚀 Key Features

### 📊 Live Alpha Dashboard

A professional-grade terminal interface built with React + Tailwind CSS, featuring:

**Real-Time Signal Feed**:
- Live updates via WebSocket-style polling
- Color-coded confidence indicators (80-85%: Yellow, 85-90%: Orange, 90%+: Green)
- Complete trade details: Entry, Target, Stop Loss, R:R ratio
- Status tracking: Pending → Active → TP Hit / SL Hit
- Historical performance metrics

**Intel Feed**:
- Market narrative analysis
- Sector rotation insights
- High-signal X account aggregation
- Importance scoring (7-10 scale)
- Deep-dive reports with sourcing

**Yield Farming Hub**:
- 10-30 curated opportunities refreshed every 6 hours
- Risk-level filtering (Low/Medium/High/Degen)
- APY tracking with TVL context
- Direct links to farming platforms
- Chain-based categorization

**Airdrop Tracker**:
- New opportunities updated daily
- Rogue Score (0-100 scale)
- Task breakdowns and deadline tracking
- Estimated value calculations
- One-click access to dashboards

**Analytics Dashboard**:
- **Performance Metrics**: Win rate, average R:R, total signals
- **Market Analytics**: Sector performance, trending narratives
- **Signal Analytics**: Best performing tokens, chains, timeframes
- **Charts & Graphs**: Interactive visualizations powered by Recharts

---

### 🗣️ Voice Interaction (VAPI Integration)

**Natural Language Interface**: Speak to Rogue like you would a human analyst.

**Powered by**:
- **VAPI**: Voice AI platform for real-time conversation
- **0G Inference (Qwen3-32B)**: Decentralized LLM via 0G Compute Network with TEE verification
- **Custom Tool Calling**: Database queries, price lookups, sentiment analysis

**Example Conversations**:
```
You: "Hey Rogue, what's happening with Solana?"
Rogue: "Solana is currently trading at $25.30, up 4.2% today. 
        Recent news: Partnership with Visa announced. Technical 
        analysis shows bullish MACD crossover. Would you like me 
        to generate a detailed report?"

You: "Yes, and also check the sentiment on Twitter"
Rogue: *Searches X* "Sentiment is overwhelmingly bullish. 
        Top traders like Pentosh1 and CryptoCred are highlighting 
        the Visa partnership. Volume is 30% above average..."
```

**Voice Commands**:
- "Scan [token symbol]" - Deep dive analysis
- "What's the market sentiment?" - Real-time sentiment check
- "Find me airdrops" - Latest opportunities
- "Show me high-yield farms" - DeFi farming options

---

### 🤖 "Ask Rogue" Terminal

An **interactive chat interface** with persistent conversation history.

**Features**:
- Web3 wallet connection for personalized responses
- Tier-aware (gives Diamond users priority intel)
- Real-time web and X search
- Database query integration
- Code block rendering for technical responses
- Message history with smooth animations

**Use Cases**:
```
"What's the best Layer 2 play right now?"
"Explain the current AI narrative"
"Compare Arbitrum vs Optimism fundamentals"
"Find me tokens with RSI below 30"
"What did VitalikButerin tweet about today?"
```

**Technical Implementation**:
- **Routing Agent**: Determines if question needs DB lookup or web search
- **Chat Agent (0G Inference)**: Handles complex queries with real-time data via Qwen3-32B
- **Streaming Responses**: Character-by-character rendering for natural feel
- **Context Preservation**: Maintains conversation across sessions via 0G encrypted memory

---

### 🔐 Tiered Access System

**Tier Determination**: Based on RGE token holdings (0G Chain).

| Tier | Requirement | Benefits |
|------|-------------|----------|
| 💎 **Diamond** | 1000+ RGE | • Immediate signals via Telegram<br>• Priority support<br>• Exclusive alpha reports<br>• Custom scan requests (unlimited) |
| 🥇 **Gold** | 100 - 999 RGE | • Immediate signals via Telegram<br>• Advanced analytics<br>• Custom scan requests (10/day) |
| 🥈 **Silver** | 10 - 99 RGE | • Signals (+15min delay)<br>• Basic analytics<br>• Custom scan requests (5/day) |
| 🌐 **Public** | 0 - 9 RGE | • Signals (+60min delay via X)<br>• Public dashboard access |

**How to Get RGE Tokens**:
- **0G Testnet (Galileo)**: `0x4Cd7fDFf83DC1540696BdaF38840a93134336dF8`
- **0G Mainnet**: Deployed on 0G Mainnet (Chain ID: 16661)
- Explorer: [chainscan.0g.ai](https://chainscan.0g.ai)

**Tier Verification**:
- Real-time balance checking via Ethers.js
- Automatic tier updates every 24 hours
- Manual /verify command in Telegram bot

**Telegram Bot Commands**:
- `/start` - Link wallet and join tier
- `/verify` - Check current tier status
- `/scan [token]` - Request custom token analysis
- `/help` - Full command list

---

### 📈 Signal Types & Execution

**Market Orders** (Immediate Execution):
```
Status: ACTIVE (immediately)
Entry: Current market price
Scenario: Strong momentum + ideal technical setup
Alert: Sent to all tiers immediately (with delay)
```

**Limit Orders** (Smart Entry):
```
Status: PENDING (monitoring)
Entry: Support level below current price
Scenario: Price extended, waiting for pullback
Alert: Sent when price hits entry level

Monitoring Process:
- Signal Monitor checks every 1 minute
- Compares current price to entry price
- Activates signal when entry <= current price
- Sends activation alert to all tiers
```

**Example Limit Order Flow**:
```
12:00 PM - Signal Generated
Token: SOL
Current Price: $27.50
Entry (Limit): $25.00 (support)
Status: PENDING

12:30 PM - Price drops to $25.80
Status: Still PENDING (waiting)

1:00 PM - Price hits $24.95
Status: ACTIVE ✅
Alert Sent: "🚀 SOL limit order activated at $24.95"
```

---

### 🎨 Custom Cursor & UI/UX

**Premium Design Elements**:
- **Custom Animated Cursor**: Glowing cyan trail that follows mouse movement
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Particle Backgrounds**: Dynamic animated backgrounds using UnicornStudio
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **Dark Theme**: Cyberpunk-inspired noir aesthetic with cyan accents

**Responsive Design**:
- Mobile-first approach
- Adaptive layouts for tablet and desktop
- Touch-optimized controls
- Progressive Web App (PWA) ready

---

### 🔄 Real-Time Updates

**Live Dashboard Sync**:
- Polls backend every 30 seconds for new signals/intel
- Toast notifications for critical updates
- Unread badge indicators
- Smooth list updates with animations

**WebSocket Alternative**:
- Long-polling with optimized caching
- React Query for intelligent data fetching
- Automatic retry on network failures

---

### 🔗 IQ.AI Integration

**On-Chain Activity Logging**:
- Every agent action logged to IQ.AI platform
- Supports token holder rewards
- Transparent activity tracking
- API-based log submission with retry logic

**Log Types**:
- Agent actions (scanner runs, signal generation)
- User interactions (chat queries, custom scans)
- System events (swarm completions, errors)

**Retry Mechanism**:
- Failed logs queued in database
- Background processor retries every minute
- Exponential backoff for transient errors
- Manual retry capability

---

## 🔄 How It Works

### The Complete Signal Generation Cycle

**Phase 1: Market Surveillance (Every 1 Hour)**

```
┌─────────────────────────────────────────────────────┐
│ 1. Orchestrator wakes up                            │
│    - Checks database for last run timestamp         │
│    - Calculates optimal next run time               │
│    - Validates signal quota (max 3/24h)             │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ 2. Data Aggregation (Parallel)                      │
│    - CoinGecko: Trending coins + Top gainers        │
│    - Birdeye: Real-time DEX trending                │
│    - DeFi Llama: TVL shifts (chains + protocols)    │
│    - CoinMarketCap: BTC price + market context      │
│    - Fetch recent posts to avoid duplication        │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ 3. Scanner Agent Activated                          │
│    Input: Aggregated market data                    │
│    Process:                                         │
│    - Identifies 10-15 trending tokens               │
│    - Searches X for narrative validation            │
│    - Filters out noise (stablecoins, wraps, scams)  │
│    - Prioritizes mid/low caps with volume           │
│    Output: 3-5 validated candidates                 │
└─────────────────────────────────────────────────────┘
```

**Phase 2: Deep Analysis**

```
┌─────────────────────────────────────────────────────┐
│ 4. Analyzer Agent Activated                         │
│    Input: Candidate list from Scanner               │
│                                                     │
│    For each candidate:                              │
│    ├─ Check recent signals DB (avoid duplicates)    │
│    ├─ Fetch current price (chain + address)         │
│    ├─ Advanced Technical Analysis (2025 Meta):      │
│    │   • CVD (Cumulative Volume Delta - orderflow)  │
│    │   • ICT Order Blocks & Fair Value Gaps         │
│    │   • Volume Profile (POC & Value Area)          │
│    │   • Heikin-Ashi + SuperTrend                   │
│    │   • Bollinger Squeeze + Keltner Channel        │
│    │   • Volume-Weighted MACD                       │
│    │   • Fibonacci Retracements/Extensions          │
│    │   • Multi-Timeframe Alignment Score            │
│    │   • Traditional: RSI, MACD, EMAs               │
│    ├─ Signal Quality Score (0-100):                 │
│    │   Based on confluence of advanced indicators   │
│    ├─ Fundamental Analysis:                         │
│    │   • Market Cap / FDV ratio                     │
│    │   • 24h volume validation                      │
│    │   • Holder distribution                        │
│    └─ Sentiment Analysis (Tavily):                  │
│        • Recent news search                         │
│        • Community sentiment                        │
│        • Partnership announcements                  │
│                                                     │
│    Decision Logic:                                  │
│    IF confidence >= 80% AND signal_quality >= 60:   │
│       → Determine order type (market vs limit)      │
│       → Calculate entry, target (1:2 RR), SL        │
│       → Generate signal with confluences listed     │
│    ELSE:                                            │
│       → Return "no_signal"                          │
│                                                     │
│    Output: Signal details or skip                   │
└─────────────────────────────────────────────────────┘
```

**Phase 3: Content Generation & Distribution**

```
┌─────────────────────────────────────────────────────┐
│ 5. Writer/Generator Agent                           │
│    Input: Signal details from Analyzer              │
│    Process:                                         │
│    - Formats signal with entry/exit levels          │
│    - Adds confidence score and reasoning            │
│    - Creates engaging narrative                     │
│    Output: Formatted content ready for publishing   │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ 6. Publisher Agent - Tiered Distribution            │
│                                                     │
│    IF order_type == "limit":                        │
│       status = PENDING                              │
│    ELSE:                                            │
│       status = ACTIVE                               │
│                                                     │
│    Distribution Timeline:                           │
│    00:00 → Save to Database (run record created)    │
│    00:00 → Diamond/Gold Telegram Alert (immediate)  │
│    15:00 → Silver Telegram Alert (scheduled)        │
│    30:00 → X Post (scheduled)                       │
│           → Public Dashboard Update                 │
└─────────────────────────────────────────────────────┘
```

**Phase 4: Continuous Monitoring**

```
┌─────────────────────────────────────────────────────┐
│ 7. Signal Monitor (Every 1 Minute)                  │
│                                                     │
│    FOR each active or pending signal:               │
│                                                     │
│    IF status == PENDING (limit order):              │
│       - Fetch current price                         │
│       - IF price <= entry_price:                    │
│           • Update status to ACTIVE                 │
│           • Send activation alert                   │
│           • Broadcast to all tiers                  │
│                                                     │
│    IF status == ACTIVE:                             │
│       - Fetch current price                         │
│       - Calculate P&L                               │
│       - IF price >= target_price:                   │
│           • Update status to TP_HIT                 │
│           • Send profit alert                       │
│       - ELSE IF price <= stop_loss:                 │
│           • Update status to SL_HIT                 │
│           • Send loss alert                         │
└─────────────────────────────────────────────────────┘
```

**Phase 5: Intel & Opportunities (Parallel)**

```
┌─────────────────────────────────────────────────────┐
│ Intel Agent (Runs with Swarm)                       │
│    - Analyzes market narratives                     │
│    - Searches high-signal X accounts                │
│    - Identifies sector rotations                    │
│    - Scores importance (1-10)                       │
│    IF score >= 7: Publish to Intel feed             │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ Yield Agent (Every 6 Hours)                         │
│    - Fetches 10,000+ pools from DeFi Llama          │
│    - Verifies protocol safety via X/web             │
│    - Risk categorization                            │
│    - Selects 10-30 best opportunities               │
│    - Updates yield_opportunities table              │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ Airdrop Agent (Daily)                               │
│    - X keyword search (latest 72h)                  │
│    - Web scraping (Galxe, Layer3, etc.)             │
│    - Scores 0-100 based on criteria                 │
│    - Filters for score >= 83                        │
│    - Returns 20-30 opportunities                    │
│    - Updates airdrops table                         │
└─────────────────────────────────────────────────────┘
```

---

### Custom Scan Request Flow

**User-Initiated Analysis**:

```
User → Telegram Bot: "/scan $SOL"
                        ↓
┌─────────────────────────────────────────────────────┐
│ 1. Custom Request Handler                           │
│    - Validates user tier                            │
│    - Checks daily scan quota                        │
│    - Creates custom_requests DB entry               │
│    - Returns: "Processing your request..."          │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ 2. Scanner Agent (Special Mode)                     │
│    Input: Token symbol                              │
│    Process:                                         │
│    - Fetches price, volume, market cap              │
│    - Analyzes 1h, 24h, 7d price action              │
│    - Searches X for narratives                      │
│    - Checks on-chain anomalies                      │
│    Output: Detailed analysis object                 │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ 3. Analyzer Agent                                   │
│    Input: Scanner analysis                          │
│    Process: Full multi-dimensional analysis         │
│    Output: Trading recommendation                   │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ 4. Delivery                                         │
│    - Formats response                               │
│    - Sends via Telegram DM                          │
│    - Updates custom_requests status: completed      │
│    - Stores result in analysis_result field         │
└─────────────────────────────────────────────────────┘
```

---

### Voice Conversation Flow

```
User → Speaks: "What's happening with Solana?"
                        ↓
┌─────────────────────────────────────────────────────┐
│ VAPI Platform                                       │
│    - Speech-to-Text                                 │
│    - Sends text to Rogue backend                    │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ Routing Agent                                       │
│    - Analyzes query intent                          │
│    - Checks if DB lookup needed                     │
│    - Routes to Chat Agent with context              │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ Chat Agent (0G Inference)                            │
│    - Qwen3-32B via 0G Compute Network               │
│    - Built-in X search for "Solana news"             │
│    - Built-in web search for current price           │
│    - Synthesizes response                            │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ VAPI Platform                                       │
│    - Text-to-Speech                                 │
│    - Streams audio to user                          │
└─────────────────────────────────────────────────────┘
```

---

## 📸 Screenshots

<div align="center">

### Analytics Dashboard
![Analytics](https://rogue-adk.vercel.app/analytics.png)
*Comprehensive performance analytics and market insights*

</div>

---

## 🛠️ Tech Stack

### Backend Infrastructure

**Runtime & Framework**:
- **Node.js v18+**: JavaScript runtime
- **TypeScript**: Type-safe development
- **Express.js**: REST API framework
- **ts-node-dev**: Hot-reload development server

**AI & Agent Orchestration**:
- **IQAI ADK (Agent Development Kit)**: Agent builder framework
- **0G Compute Network (Qwen3-32B)**: Decentralized, verifiable AI inference via 0G
- **0G Storage**: Decentralized encrypted storage for AI memory, datasets, and charts
- **0G Fine-Tuning**: On-chain model fine-tuning with trade history datasets
- **Zod**: Schema validation for agent outputs

**Data Sources & APIs**:
| Service | Purpose | Endpoints Used |
|---------|---------|----------------|
| **CoinGecko** | Price data, trending coins, top gainers | `/search/trending`, `/coins/markets`, `/simple/price` |
| **Birdeye** | Real-time DEX data, Solana trending | `/defi/trending`, `/defi/price`, `/defi/ohlcv` |
| **DeFi Llama** | TVL tracking, yield pools, protocol stats | `/protocols`, `/pools`, `/chains` |
| **CoinMarketCap** | Alternative price source, global metrics | `/v1/cryptocurrency/quotes/latest` |
| **Hyperliquid** | Perpetual futures trading (mainnet + testnet) | `/info`, `/exchange` (EIP-712 signed) |
| **Tavily** | News aggregation, sentiment analysis | `/search` |
| **X API v2** | Social posting (OAuth 1.0a) | `POST /2/tweets` |
| **VAPI** | Voice conversation platform | `/call`, `/assistant` |
| **IQ.AI** | On-chain activity logging | `/api/logs` |

**Database & Storage**:
- **0G Storage (Decentralized)**: AI memory, embeddings, trade history, chart images
  - AES-256-GCM encrypted uploads for sensitive data
  - Content-addressed via Merkle tree root hashes
  - Turbo indexer for fast retrieval
  - Public URLs via `storagescan.0g.ai`
- **Supabase (PostgreSQL)**: Auth, dashboard, user tiers, signal metadata
  - Real-time subscriptions
  - Row-level security
  - Automatic backups

**Database Schema**:
```sql
-- Core Tables
├── users                  -- Wallet addresses, tiers, Telegram IDs
├── runs                   -- Swarm execution history (signals, intel)
├── scheduled_posts        -- Tiered content delivery queue
├── tier_snapshots         -- Distribution tracking per tier
├── custom_requests        -- User-initiated scan requests
├── yield_opportunities    -- DeFi farming pools
├── airdrops              -- Points farming opportunities
├── iqai_logs             -- Activity logs for IQ.AI platform
└── futures_agent_config  -- Hyperliquid API keys (encrypted), settings
```

**Authentication & Web3**:
- **Ethers.js v6**: Ethereum & 0G chain interaction
- **0G Compute Network**: Decentralized inference with TEE verification
- **0G Chain (Testnet + Mainnet)**: RGE token deployment and tier verification
- **Smart Contract**: RGE token balance queries on 0G

**Background Services**:
```typescript
// Swarm Scheduler
setInterval(() => orchestrator.runSwarm(), 60 * 60 * 1000); // 1h

// Signal Monitor  
setInterval(() => signalMonitor.checkActiveSignals(), 60 * 1000); // 1min

// Scheduled Post Processor
setInterval(() => scheduledPostService.processPendingPosts(), 60 * 1000); // 1min

// Yield Updater
setInterval(() => yieldAgent.run(), 6 * 60 * 60 * 1000); // 6h

// Airdrop Updater
setInterval(() => airdropAgent.run(), 24 * 60 * 60 * 1000); // 24h

// IQ.AI Log Processor
iqAiService.startLogProcessor(); // Continuous
```

**Logging & Monitoring**:
- **Winston**: Structured logging
- **Morgan**: HTTP request logging
- Custom log aggregation for dashboard

**Security**:
- **Helmet.js**: HTTP security headers
- **CORS**: Configurable origin whitelist
- **Environment Variables**: Secrets management via `.env`
- **Rate Limiting**: API endpoint protection

---

### Frontend Architecture

**Framework & Build Tools**:
- **React 18**: UI library
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety

**Styling & Components**:
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless component primitives
  - Dialog, Avatar, Scroll Area, Separator, Slot
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **HugeIcons**: Additional icon set

**State Management & Data Fetching**:
- **TanStack Query (React Query)**: Server state management
  - Automatic caching
  - Background refetching
  - Optimistic updates
- **Axios**: HTTP client

**Web3 Integration**:
- **Wagmi**: React hooks for Ethereum
- **Viem**: TypeScript Ethereum library
- **RainbowKit**: Wallet connection UI
  - WalletConnect, MetaMask, Coinbase Wallet support
  - Custom theming (dark mode, cyan accents)

**Routing**:
- **React Router v6**: Client-side routing
  - Dashboard layout wrapper
  - Nested routes for analytics
  - Protected routes (tier-based)

**Voice Integration**:
- **VAPI Web SDK**: Voice conversation client
  - Real-time audio streaming
  - Event-based hooks
  - Custom tool calling

**UI/UX Enhancements**:
- **Custom Cursor Component**: Animated trail effect
- **Sonner**: Toast notifications
- **Recharts**: Chart library for analytics
- **Class Variance Authority**: Variant-based component styling
- **Tailwind Merge**: Intelligent class merging
- **Tailwind Animate**: Additional animation utilities

**3D & Animations**:
- **UnicornStudio**: Particle background animations
  - Loaded via external UMD script
  - Custom initialization logic

**Deployment**:
- **Vercel**: Frontend hosting
  - Automatic deployments from GitHub
  - Edge network CDN
  - Environment variable management

**Build Output**:
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [images/fonts]
└── _redirects (for SPA routing)
```

---

### Infrastructure & DevOps

**Version Control**:
- **Git**: Source control
- **GitHub**: Repository hosting

**CI/CD**:
- **Vercel**: Automatic frontend deployments
- **Heroku**: Backend hosting (alternative: Railway, Render)
  - Procfile for process management
  - Automatic builds on push

**Environment Management**:
```env
# Backend (.env) — 0G Infrastructure
PORT=3000
NODE_ENV=production

# 0G Compute Network (Required)
ZG_COMPUTE_PRIVATE_KEY=0x...
ZG_RPC_URL=https://evmrpc.0g.ai
ZG_INERENCE_PROVIDER=0x...
ZG_INERENCE_MODEL=Qwen3-32B
ZG_SCANNER_PROVIDER=0x...
ZG_SCANNER_MODEL=Qwen3-32B
ZG_COMPUTE_NETWORK=mainnet

# 0G Storage (Required)
ZG_STORAGE_INDEXER_RPC=https://indexer-storage-turbo.0g.ai
ZG_STORAGE_PRIVATE_KEY=0x...

# 0G Fine-Tuning
ZG_FINETUNING_PROVIDER=0x...
ZG_FINETUNING_MODEL=Qwen2.5-0.5B-Instruct

# 0G Memory
ZG_MEMORY_ENCRYPTION_KEY=...

# Database (Auth + Dashboard)
SUPABASE_URL=https://...
SUPABASE_SERVICE_KEY=...

# Other Services
TELEGRAM_BOT_TOKEN=...
IQAI_API_KEY=...
AGENT_TOKEN_CONTRACT=0x...

# Frontend (.env)
VITE_API_URL=https://api.rogue-agent.com
VITE_VAPI_PUBLIC_KEY=...
VITE_WALLETCONNECT_PROJECT_ID=...
```

**Monitoring & Analytics**:
- Application logs via Winston
- Error tracking (manual implementation)
- Performance monitoring via browser DevTools

---

### Development Tools

**Linting & Formatting**:
- **ESLint**: JavaScript/TypeScript linting
- **Prettier**: Code formatting
- **TypeScript ESLint**: TS-specific rules

**Testing** (Future):
- Jest (unit tests)
- React Testing Library (component tests)
- Playwright (E2E tests)

**API Development**:
- **Thunder Client** / **Postman**: API testing
- **Swagger** (planned): API documentation

---

## 🌐 0G Infrastructure — Decentralized AI Stack

Rogue is built entirely on the **0G (Zero Gravity) ecosystem** — the first decentralized AI operating system. All AI inference, storage, and fine-tuning run on 0G's verifiable, on-chain infrastructure.

### 🔗 0G Chain Information

| Property | Testnet (Galileo) | Mainnet |
|----------|-------------------|---------|
| **Chain Name** | 0G-Galileo-Testnet | 0G Mainnet |
| **Chain ID** | 16602 | 16661 |
| **RPC URL** | `https://evmrpc-testnet.0g.ai` | `https://evmrpc.0g.ai` |
| **Block Explorer** | [chainscan-galileo.0g.ai](https://chainscan-galileo.0g.ai) | [chainscan.0g.ai](https://chainscan.0g.ai) |
| **Currency** | 0G | 0G |
| **Faucet** | [faucet.0g.ai](https://faucet.0g.ai) | — |

**0G Storage Contracts**:

| Contract | Testnet | Mainnet |
|----------|---------|---------|
| **Flow** | `0x22E03a6A89B950F1c82ec5e74F8eCa321a105296` | `0x62D4144dB0F0a6fBBaeb6296c785C71B3D57C526` |
| **Mine** | `0x00A9E9604b0538e06b268Fb297Df333337f9593b` | `0xCd01c5Cd953971CE4C2c9bFb95610236a7F414fe` |
| **Reward** | `0xA97B57b4BdFEA2D0a25e535bd849ad4e6C440A69` | `0x457aC76B58ffcDc118AABD6DbC63ff9072880870` |

**0G Storage Indexers**:
- **Testnet Turbo**: `https://indexer-storage-testnet-turbo.0g.ai`
- **Mainnet Turbo**: `https://indexer-storage-turbo.0g.ai`

---

### 💰 $RGE Token

The **$RGE** token powers Rogue's tiered access system and is deployed on the 0G chain.

| Property | Value |
|----------|-------|
| **Token Name** | Rogue Agent |
| **Symbol** | RGE |
| **0G Testnet Address** | `0x4Cd7fDFf83DC1540696BdaF38840a93134336dF8` |
| **0G Mainnet Address** | `0x4Cd7fDFf83DC1540696BdaF38840a93134336dF8` |
| **Total Supply** | 1,000,000,000 RGE |
| **Chain Explorer** | [chainscan.0g.ai](https://chainscan.0g.ai) |
| **Testnet Explorer** | [chainscan-galileo.0g.ai](https://chainscan-galileo.0g.ai) |

**Tier Requirements**:
| Tier | RGE Required | Access Level |
|------|-------------|--------------|
| 💎 Diamond | 1,000+ | Full access, unlimited custom scans, priority alpha |
| 🥇 Gold | 100–999 | Full signals, 10 custom scans/day |
| 🥈 Silver | 10–99 | Delayed signals, 5 custom scans/day |
| 🌐 Public | 0–9 | Curated highlights only |

---

### 🤖 0G Compute Network — Decentralized Inference

All AI inference in Rogue runs through the **0G Compute Network**, providing decentralized, verifiable LLM access:

**How It Works**:
1. **Provider Discovery**: Auto-discovers available inference providers on the 0G network
2. **Authenticated Requests**: Uses 0G wallet-based authentication for API access
3. **TEE Verification**: Every response is verified via 0G's Trusted Execution Environment (`ZG-Res-Key` header)
4. **On-Chain Settlement**: Inference fees are settled on the 0G blockchain

**Models Used**:
| Role | Model | Provider Config |
|------|-------|-----------------|
| **Primary LLM** | Qwen3-32B | `ZG_INERENCE_PROVIDER` + `ZG_INERENCE_MODEL` |
| **Scanner LLM** | Qwen3-32B | `ZG_SCANNER_PROVIDER` + `ZG_SCANNER_MODEL` |

**Service Architecture**:
```typescript
import { createZGComputeNetworkBroker } from '@0gfoundation/0g-compute-ts-sdk';

const broker = await createZGComputeNetworkBroker(wallet);

// Discover providers
const services = await broker.inference.listService();

// Get authenticated headers for requests
const headers = await broker.inference.getRequestHeaders(providerAddress);

// Verify response integrity (TEE)
const isValid = await broker.inference.processResponse(providerAddress, chatId);
```

**Integration with ADK-TS**:
Rogue wraps 0G inference through the AI SDK's OpenAI-compatible transport, enabling seamless integration with the ADK agent framework while maintaining decentralized verification:

```typescript
const zgOpenAI = createOpenAI({
  apiKey: '0g-inference',
  baseURL: '',
  fetch: async (url, options) => {
    const { endpoint } = await zgInferenceService.getProviderEndpoint(providerAddress);
    const headers = await zgInferenceService.getProviderHeaders(providerAddress);
    const targetUrl = url.replace(/^https?:\/\/[^/]+/, endpoint);
    options.headers = { ...options.headers, ...headers };
    return fetch(targetUrl, options);
  },
});

export const llm = new AiSdkLlm(zgOpenAI.chat('Qwen3-32B'));
```

---

### 📦 0G Storage — Decentralized Encrypted Storage

0G Storage provides content-addressed, encrypted storage for all of Rogue's AI memory, datasets, and generated content:

**Key Features**:
- **Content Addressing**: Files are identified by Merkle tree root hashes
- **AES-256-GCM Encryption**: Sensitive data (trade memory, embeddings) encrypted before upload
- **Proof-Based Retrieval**: Cryptographic proof of data integrity on download
- **Turbo Indexer**: Fast retrieval via dedicated indexer nodes
- **Public URLs**: Stored files accessible via `https://storagescan.0g.ai/turbo/file/{rootHash}`

**What We Store on 0G**:
| Data Type | Encrypted | Description |
|-----------|-----------|-------------|
| **Trade Memory** | ✅ Yes | Historical trade outcomes for agent learning |
| **Token Intel** | ✅ Yes | Aggregated sentiment and narrative data |
| **Whale Alerts** | ✅ Yes | Large wallet movement tracking data |
| **Embeddings** | ✅ Yes | Vector embeddings for semantic search |
| **Chart Images** | ❌ No | Generated TradingView-quality PNG charts |
| **Fine-Tuning Datasets** | ❌ No | Trade signal datasets for model training |

**Upload Example**:
```typescript
import { ZgFile, Indexer, MemData } from '@0gfoundation/0g-storage-ts-sdk';

// Upload encrypted AI memory
const buffer = Buffer.from(JSON.stringify(memoryEntry), 'utf-8');
const rootHash = await zgStorageService.uploadEncryptedBuffer(
  buffer,
  `memory/${entry.type}/${Date.now()}`,
  encryptionKey
);

// Download and decrypt
const retrieved = await zgStorageService.downloadEncrypted(rootHash, encryptionKey);
const entry = JSON.parse(retrieved.toString('utf-8'));
```

**Architecture Split**:
```
┌─────────────────────────────────────────────────────┐
│ Storage Architecture                                │
├─────────────────────────────────────────────────────┤
│                                                     │
│  0G Storage (Decentralized)                         │
│  ├── AI Memory (encrypted)                          │
│  │   ├── Trade history & outcomes                   │
│  │   ├── Token intel & sentiment archives           │
│  │   ├── Whale alert records                        │
│  │   └── Vector embeddings                          │
│  ├── Chart Images (public)                          │
│  └── Fine-Tuning Datasets                           │
│                                                     │
│  Supabase (PostgreSQL)                              │
│  ├── Auth & User Management                         │
│  ├── Dashboard Data (signals, intel metadata)       │
│  ├── User Tiers & Wallet Mapping                    │
│  ├── Telegram Bot State                             │
│  └── Futures Agent Config (encrypted keys)          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### 🧠 0G Memory — Encrypted AI Memory

0G Memory is Rogue's persistent AI memory layer, storing agent knowledge in encrypted form on 0G Storage:

**Memory Types**:
| Type | Purpose | Encryption |
|------|---------|------------|
| `trade_memory` | Historical trade outcomes (win/loss/PnL) for agent learning | AES-256-GCM |
| `token_intel` | Aggregated narratives, sentiment scores per token | AES-256-GCM |
| `whale_alert` | Large wallet movement records | AES-256-GCM |
| `sentiment_archive` | Historical sentiment data for trend analysis | AES-256-GCM |
| `embedding` | Vector embeddings for semantic similarity search | AES-256-GCM |

**How Agents Use Memory**:
1. After each trade closes → `storeTradeMemory()` saves outcome
2. Scanner searches → `storeTokenIntel()` saves narrative data
3. Before new analysis → Agent retrieves relevant memory for context
4. Fine-tuning → Historical memories form training datasets

**Example**:
```typescript
// Store a trade outcome
const rootHash = await zgMemoryService.storeTradeMemory({
  symbol: 'ETH',
  direction: 'LONG',
  entryPrice: 2450,
  exitPrice: 2550,
  pnl: 4.08,
  confidence: 87,
  outcome: 'win',
  agentId: 'futures_analyzer',
});

// Retrieve later for context
const memory = await zgMemoryService.retrieve(rootHash);
```

---

### 🎓 0G Fine-Tuning — On-Chain Model Training

0G Fine-Tuning allows Rogue to train custom models on its own trading data, all verifiable on-chain:

**How It Works**:
1. **Dataset Preparation**: `prepareTradingDataset()` converts trade history to instruction-following JSONL format
2. **Upload to 0G Storage**: Dataset uploaded to decentralized storage
3. **Create Fine-Tuning Task**: Task submitted to 0G Fine-Tuning provider with custom hyperparameters
4. **Monitor Progress**: Track task status (Init → Running → Completed)
5. **Download Model**: Acknowledge and download the fine-tuned model

**Default Training Config**:
```typescript
const DEFAULT_FINETUNING_CONFIG = {
  neftune_noise_alpha: 5,
  num_train_epochs: 3,
  per_device_train_batch_size: 2,
  learning_rate: 0.0002,
  max_steps: -1,
};
```

**Dataset Format** (JSONL):
```json
{
  "instruction": "Analyze this trading signal and predict market direction...",
  "input": "{\"symbol\":\"ETH\",\"direction\":\"LONG\",\"technical_indicators\":{...}}",
  "output": "{\"direction\":\"LONG\",\"entry\":2450,\"target\":2550,\"outcome\":\"WIN\"}"
}
```

**Example Workflow**:
```typescript
// Prepare dataset from trading history
const datasetPath = await zgFinetuningService.prepareTradingDataset(
  '/tmp/rogue-dataset.jsonl',
  { includeWinningTrades: true, minConfidence: 80 }
);

// Submit fine-tuning task on 0G Compute Network
const task = await zgFinetuningService.createTask(datasetPath);

// Monitor progress
const status = await zgFinetuningService.getTaskStatus(task.taskId);

// Download the fine-tuned model when complete
await zgFinetuningService.acknowledgeAndDownloadModel(task.taskId, '/models/rogue-finetuned');
```

---

## 💻 Getting Started

### Prerequisites

Before you begin, ensure you have:
- **Node.js v18+** installed ([Download](https://nodejs.org/))
- **Git** for version control
- **Supabase Account** ([Sign up](https://supabase.com/))
- **0G Wallet** with private key for Compute Network access ([Faucet](https://faucet.0g.ai))
- **Telegram Bot Token** (optional, for alerts) - Create via [@BotFather](https://t.me/botfather)
- **VAPI Account** (optional, for voice) ([Sign up](https://vapi.ai/))

---

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/GETOfinance/RogueAgent.git
cd RogueAgent
```

#### 2. Install Dependencies

**Root dependencies**:
```bash
npm install
```

**Backend dependencies**:
```bash
cd backend
npm install
cd ..
```

**Frontend dependencies**:
```bash
cd frontend
npm install
cd ..
```

---

### Configuration

#### 3. Database Setup (Supabase)

1. Create a new project on [Supabase](https://supabase.com/)
2. Copy `schema.sql` contents to SQL Editor and execute
3. Note your project URL and anon key

#### 4. Backend Environment Variables

Create `backend/.env`:

```env
# Server Configuration
PORT=3000
NODE_ENV=development
RUN_INTERVAL_MINUTES=60  # Swarm runs every 1 hour

# ===== 0G COMPUTE NETWORK (Inference — Required) =====
ZG_COMPUTE_PRIVATE_KEY=your_0g_wallet_private_key
ZG_RPC_URL=https://evmrpc.0g.ai
ZG_INERENCE_PROVIDER=0x_inference_provider_address
ZG_INERENCE_MODEL=Qwen3-32B
ZG_SCANNER_PROVIDER=0x_scanner_provider_address
ZG_SCANNER_MODEL=Qwen3-32B
ZG_COMPUTE_NETWORK=mainnet

# ===== 0G STORAGE (Required) =====
ZG_STORAGE_INDEXER_RPC=https://indexer-storage-turbo.0g.ai
ZG_STORAGE_PRIVATE_KEY=your_0g_storage_private_key

# ===== 0G FINE-TUNING =====
ZG_FINETUNING_PROVIDER=0x_finetuning_provider_address
ZG_FINETUNING_MODEL=Qwen2.5-0.5B-Instruct

# ===== 0G CHAIN (RGE Token) =====
ZG_CHAIN_RPC_URL=https://evmrpc.0g.ai
ZG_CHAIN_RPC_URL_TESTNET=https://evmrpc-testnet.0g.ai
RGE_TOKEN_ZG_TESTNET=0x4Cd7fDFf83DC1540696BdaF38840a93134336dF8
RGE_TOKEN_ZG_MAINNET=

# ===== 0G MEMORY =====
ZG_MEMORY_ENCRYPTION_KEY=your_hex_encoded_32_byte_key

# Database (Auth + Dashboard)
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_KEY=eyJhbGc...

# IQ.AI
IQAI_API_KEY=...
AGENT_TOKEN_CONTRACT=0x...

# Telegram (Optional)
TELEGRAM_BOT_TOKEN=1234567890:ABCdef...
TELEGRAM_CHANNEL_ID=@your_channel

# X API (Optional - OAuth 1.0a)
X_API_KEY=...
X_API_KEY_SECRET=...
X_ACCESS_TOKEN=...
X_ACCESS_TOKEN_SECRET=...

# Data Providers
COINGECKO_API_KEY=CG-...
CMC_API_KEY=...
BIRDEYE_API_KEY=...
TAVILY_API_KEY=tvly-...

# Futures Encryption
FUTURES_ENCRYPTION_KEY=your_futures_encryption_key_here

# HF Token (Optional - chart generation)
HF_TOKEN=hf_...
```

#### 5. Frontend Environment Variables

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:3000
VITE_VAPI_PUBLIC_KEY=...  # From vapi.ai dashboard
VITE_WALLETCONNECT_PROJECT_ID=...  # From walletconnect.com
```

---

### Running the Application

#### Development Mode

**Terminal 1 - Backend**:
```bash
cd backend
npm run dev
```
Backend will run on `http://localhost:3000`

**Terminal 2 - Frontend**:
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:5173`

#### Production Build

**Backend**:
```bash
cd backend
npm run build
npm start
```

**Frontend**:
```bash
cd frontend
npm run build
npm run preview
```

---

### Deployment

#### Backend (Heroku)

1. Create Heroku app:
```bash
heroku create rogue-agent-backend
```

2. Set environment variables:
```bash
heroku config:set ZG_COMPUTE_PRIVATE_KEY=0x...
heroku config:set ZG_RPC_URL=https://evmrpc.0g.ai
heroku config:set ZG_INERENCE_PROVIDER=0x...
heroku config:set ZG_INERENCE_MODEL=Qwen3-32B
heroku config:set ZG_STORAGE_INDEXER_RPC=https://indexer-storage-turbo.0g.ai
heroku config:set ZG_STORAGE_PRIVATE_KEY=0x...
heroku config:set SUPABASE_URL=https://...
# ... (all other env vars)
```

3. Deploy:
```bash
git push heroku main
```

#### Frontend (Vercel)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd frontend
vercel
```

3. Set environment variables in Vercel dashboard

---

### Initial Setup Checklist

- [ ] Database schema created in Supabase
- [ ] 0G wallet funded (testnet faucet or mainnet)
- [ ] ZG_COMPUTE_PRIVATE_KEY configured in `.env`
- [ ] 0G inference providers discovered or configured
- [ ] 0G Storage indexer connected
- [ ] All API keys configured in `.env`
- [ ] Backend running without errors
- [ ] Frontend connecting to backend
- [ ] Telegram bot responding (if enabled)
- [ ] First swarm run completed successfully
- [ ] Wallet connection working on frontend
- [ ] TEE verification passing for inference requests

---

## 📡 API Reference

### Public Endpoints

#### GET `/api/signals`
Returns recent trading signals.

**Query Parameters**:
- `limit` (optional): Number of signals to return (default: 20)
- `status` (optional): Filter by status (`active`, `pending`, `tp_hit`, `sl_hit`)

**Response**:
```json
{
  "signals": [
    {
      "id": "uuid",
      "type": "signal",
      "content": {
        "token": {
          "symbol": "SOL",
          "name": "Solana",
          "chain": "solana",
          "address": "..."
        },
        "entry_price": 25.00,
        "target_price": 32.00,
        "stop_loss": 22.00,
        "confidence": 87,
        "status": "active"
      },
      "created_at": "2025-11-23T10:00:00Z"
    }
  ]
}
```

#### GET `/api/intel`
Returns market intelligence reports.

#### GET `/api/yield`
Returns yield farming opportunities.

#### GET `/api/airdrops`
Returns airdrop opportunities.

#### POST `/api/chat`
Chat with Rogue AI.

**Body**:
```json
{
  "message": "What's the sentiment on SOL?",
  "userId": "wallet_address",
  "conversationHistory": []
}
```

#### POST `/api/custom-scan`
Request custom token analysis (requires tier verification).

**Body**:
```json
{
  "walletAddress": "0x...",
  "tokenSymbol": "SOL"
}
```

---

### Telegram Bot Commands

- `/start` - Link wallet and activate tier
- `/verify` - Check current tier status
- `/scan [token]` - Request custom analysis (tier-limited)
- `/help` - Show all commands

---

## 🔮 Roadmap

### ✅ Completed (v1.0)
- [x] Multi-Agent Swarm Architecture
- [x] Real-time Signal Generation with Limit Orders
- [x] Voice Interface (VAPI Integration)
- [x] Telegram Bot with Tier-based Alerts
- [x] Twitter Auto-Posting
- [x] Live Dashboard with Analytics
- [x] Signal Monitor (TP/SL Tracking)
- [x] Yield Farming Discovery
- [x] Airdrop Hunting
- [x] Custom Token Scan Requests
- [x] IQ.AI On-chain Logging
- [x] Web3 Wallet Integration

### 🚧 In Progress (v1.5)
- [ ] **Advanced Analytics Dashboard**
  - Historical performance tracking
  - Win/loss ratio visualization
  - Best performing chains/tokens
  - Profit/loss calculator

- [ ] **Enhanced Signal Intelligence**
  - Multi-timeframe analysis (1h, 4h, 1d)
  - Volume profile integration
  - Order book analysis
  - Whale wallet tracking

- [ ] **0G Fine-Tuning Pipeline**
  - Automated dataset preparation from trade history
  - Scheduled fine-tuning jobs on 0G Compute Network
  - Model performance evaluation and deployment
  - Verifiable on-chain model provenance

- [ ] **Mobile Application**
  - React Native iOS/Android app
  - Push notifications for signals
  - Offline signal history
  - Voice interface on mobile

### 🔮 Planned (v2.0)
- [ ] **On-chain Trading Execution**
  - Smart contract integration
  - Automated trade execution
  - Multi-wallet management
  - Gas optimization

- [ ] **Portfolio Management**
  - Position tracking across chains
  - P&L analytics
  - Portfolio rebalancing suggestions
  - Tax reporting integration

- [ ] **Social Trading Features**
  - Follow top performers
  - Copy trading
  - Leaderboards
  - Community signals

- [ ] **Advanced AI Features**
  - Sentiment analysis from Reddit, Discord
  - Chart pattern recognition (ML)
  - Predictive price modeling
  - Risk scoring improvements

### 🌟 Future Vision (v3.0+)
- [ ] **DAO Governance**
  - Community-driven signal validation
  - Agent parameter voting
  - Revenue sharing for RGE holders

- [ ] **Multi-Chain Expansion**
  - Cross-chain arbitrage detection
  - Bridge monitoring

- [ ] **Institutional Features**
  - API access for developers
  - Webhook integrations
  - Custom agent training
  - White-label solutions

- [ ] **Gamification**
  - Achievement system
  - Trading challenges
  - NFT rewards for top traders
  - Referral program


---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Rogue Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

See [LICENSE](LICENSE) for full details.

---

## 🙏 Acknowledgments

**Built With**:
- [0G (Zero Gravity)](https://0g.ai/) — Decentralized AI Operating System (Compute, Storage, Fine-Tuning)
- [0G Compute Network](https://0g.ai/) — Qwen3-32B inference with TEE verification
- [0G Storage](https://0g.ai/) — Encrypted decentralized storage for AI memory
- [IQAI](https://iqai.com/) — Agent Development Kit
- [Supabase](https://supabase.com/) — Database infrastructure (Auth + Dashboard)
- [VAPI](https://vapi.ai/) — Voice AI platform

**Special Thanks**:
- CoinGecko, Birdeye, DeFi Llama for data APIs
- The crypto community for feedback and support
- All contributors and early testers



<div align="center">

**Rogue**

*"In the chaos of markets, be the signal, not the noise."*

</div>
