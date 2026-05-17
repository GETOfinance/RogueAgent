import { ethers } from 'ethers';
import dotenv from 'dotenv';
dotenv.config();

const ERC20_ABI = [
  'constructor(string name_, string symbol_, uint256 initialSupply)',
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (uint256)',
  'function transfer(address to, uint256 amount) returns (bool)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function transferFrom(address from, address to, uint256 amount) returns (bool)',
  'function owner() view returns (address)',
];

// Minimal ERC20 with constructor(name, symbol, initialSupply)
// Compiled from Solidity: OpenZeppelin ERC20 mintable
const ERC20_BYTECODE = '0x60806040523480156200001157600080fd5b50604051620011c5380380620011c58339810160408110156200003357600080fd5b8101908080516401000000008111156200004d57600080fd5b828101905060208101848111156200006457600080fd5b8151856020830111640100000000821117156200008257600080fd5b505092919060200180516401000000008111156200009e57600080fd5b82810190506020810184811115620000b557600080fd5b815185602083011164010000000082111715620000d357600080fd5b5050929190602001805190602001909291905050508360009080519060200190620000fd92919062000205565b5082600190805190602001906200011692919062000205565b5081600260006101000a81548160ff021916908360ff16021790555080600381905550600354600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050620002b4565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200024857805160ff191683800117855562000279565b8280016001018555821562000279579182015b82811115620002785782518255916020019190600101906200025b565b5b5090506200028891906200028c565b5090565b620002b191905b80821115620002ad57600081600090555060010162000293565b5090565b90565b610efb80620002c46000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063395093511161006657806339509351146100f157806370a082311461015757806395d89b41146101af578063a457c2d714610232578063a9059cbb14610298578063dd62ed3e146102fe57610093565b806306fdde0314610098578063095ea7b31461011b57806318160ddd1461018157806323b872dd1461019f575b600080fd5b6100a0610376565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e05780820151818401526020810190506100c5565b50505050905090810190601f16801561010d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101676004803603604081101561013157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506103a3565b60405180821515815260200191505060405180910390f35b61018b6103c1565b6040518082815260200191505060405180910390f35b610201600480360360608110156101b557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506103cb565b60405180821515815260200191505060405180910390f35b61013d6004803603604081101561023157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104a4565b005b61027e6004803603604081101561026c57600080fd5b8101908080359060200190929190803590602001909291905050506104b3565b6040518082815260200191505060405180910390f35b6102e4600480360360408110156102aa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104c7565b60405180821515815260200191505060405180910390f35b6103606004803603604081101561031257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104e5565b6040518082815260200191505060405180910390f35b6060600080546040518060400160405280600581526020017f526f677565000000000000000000000000000000000000000000000000000000815250905090565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600354905090565b600081600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610496575081600560008667fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b806104a057600080fd5b600190509392505050565b6104ae83838361056c565b505050565b6000818311156104bf57816104c1565b825b905092915050565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561051757600080fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001905092915050565b600081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156105be57600080fd5b81600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050939250505056fea2646970667358221220e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b85564736f6c63430008040033';

interface DeployOptions {
  network: 'testnet' | 'mainnet';
  name?: string;
  symbol?: string;
  initialSupply?: string;
  privateKey?: string;
}

async function deployRGEToken(options: DeployOptions) {
  const networkConfig = {
    testnet: {
      rpcUrl: 'https://evmrpc-testnet.0g.ai',
      chainId: 16602,
      name: '0G-Galileo-Testnet',
      explorer: 'https://chainscan-galileo.0g.ai',
    },
    mainnet: {
      rpcUrl: 'https://evmrpc.0g.ai',
      chainId: 16661,
      name: '0G Mainnet',
      explorer: 'https://chainscan.0g.ai',
    },
  };

  const net = networkConfig[options.network];
  const tokenName = options.name || 'Rogue Agent';
  const tokenSymbol = options.symbol || 'RGE';
  const initialSupply = options.initialSupply || '1000000000';
  const privateKey = options.privateKey || process.env.ZG_COMPUTE_PRIVATE_KEY;

  if (!privateKey) {
    console.error('ZG_COMPUTE_PRIVATE_KEY not set');
    process.exit(1);
  }

  console.log(`\nDeploying $RGE Token on ${net.name} (Chain ID: ${net.chainId})`);
  console.log(`  Token: ${tokenName} (${tokenSymbol})`);
  console.log(`  Initial Supply: ${initialSupply} ${tokenSymbol}`);
  console.log(`  RPC: ${net.rpcUrl}\n`);

  const provider = new ethers.JsonRpcProvider(net.rpcUrl);
  const wallet = new ethers.Wallet(privateKey, provider);

  console.log(`  Deployer: ${wallet.address}`);
  const balance = await provider.getBalance(wallet.address);
  console.log(`  Balance: ${ethers.formatEther(balance)} 0G\n`);

  if (balance === BigInt(0)) {
    console.error('Insufficient balance for deployment.');
    if (options.network === 'testnet') {
      console.log('  Faucet: https://faucet.0g.ai');
    }
    process.exit(1);
  }

  const decimals = 18;
  const mintAmount = ethers.parseUnits(initialSupply, decimals);

  const factory = new ethers.ContractFactory(ERC20_ABI, ERC20_BYTECODE, wallet);

  console.log('  Deploying contract...');
  const contract = await factory.deploy(tokenName, tokenSymbol, mintAmount) as any;
  await contract.waitForDeployment();

  const contractAddress = await contract.getAddress();
  console.log(`\n  $RGE Token deployed successfully!`);
  console.log(`  Contract Address: ${contractAddress}`);
  console.log(`  Explorer: ${net.explorer}/address/${contractAddress}`);

  const totalSupply = await contract.totalSupply();
  console.log(`  Total Supply: ${ethers.formatUnits(totalSupply, decimals)} ${tokenSymbol}`);

  console.log(`\n  Add to your .env:`);
  if (options.network === 'testnet') {
    console.log(`  RGE_TOKEN_ZG_TESTNET=${contractAddress}`);
  } else {
    console.log(`  RGE_TOKEN_ZG_MAINNET=${contractAddress}`);
  }

  return contractAddress;
}

const network = (process.argv[2] || 'testnet') as 'testnet' | 'mainnet';
const name = process.argv[3];
const symbol = process.argv[4];

deployRGEToken({ network, name, symbol })
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Deployment failed:', err.message || err);
    process.exit(1);
  });
