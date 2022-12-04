const networkInfo: {
  chainID: number;
  name: string;
  rpc: string;
  txService: string;
}[] = [
  {
    chainID: 1,
    name: "Ethereum Mainnet",
    // rpc: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    rpc: 'https://ethereum.publicnode.com',
    txService: 'https://safe-transaction.mainnet.gnosis.io/',
  },
  {
    chainID: 42161,
    name: "Arbitrum One",
    rpc: "https://arb1.arbitrum.io/rpc",
    txService: 'https://safe-transaction.arbitrum.gnosis.io/',
  },
  {
    chainID: 10,
    name: "Optimism",
    rpc: "https://mainnet.optimism.io",
    txService: 'https://safe-transaction.optimism.gnosis.io/'
  },
  {
    chainID: 137,
    name: "Polygon",
    rpc: "https://polygon-bor.publicnode.com	",
    txService: 'https://safe-transaction.polygon.gnosis.io/'
  },
  {
    chainID: 56,
    name: "Binance Smart Chain",
    rpc: "https://bscrpc.com",
    txService: 'https://safe-transaction.bsc.gnosis.io/'
  },
  {
    chainID: 250,
    name: "Fantom Opera",
    rpc: "https://rpc.fantom.network",
    txService: ''
  },
  {
    chainID: 43114,
    name: "Avalanche",
    rpc: "https://rpc.ankr.com/avalanche",
    txService: 'https://safe-transaction.avalanche.gnosis.io/'
  },
  {
    chainID: 100,
    name: "Gnosis",
    rpc: "https://rpc.ankr.com/gnosis",
    txService: 'https://safe-transaction.xdai.gnosis.io/',
  },
  {
    chainID: 42,
    name: "Kovan Testnet",
    rpc: `https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    txService: ''
  },
  {
    chainID: 3,
    name: "Ropsten Testnet",
    rpc: `https://ropsten.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    txService: ''
  },
  {
    chainID: 4,
    name: "Rinkeby Testnet",
    rpc: `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    txService: 'https://safe-transaction.rinkeby.gnosis.io/',
  },
  {
    chainID: 5,
    name: "Goerli Testnet",
    rpc: `https://goerli.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    txService: 'https://safe-transaction.goerli.gnosis.io/'
  },
];

export default networkInfo;
