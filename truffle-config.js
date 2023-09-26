const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = 'your-mnemonic-phrase'; // Ganti dengan mnemonic Anda
const rpcUrl = 'https://rpc-mumbai.matic.today'; // URL RPC Mumbai Testnet



module.exports = {

  networks: {
    mumbai: {
      provider: () => new HDWalletProvider(mnemonic, rpcUrl),
      network_id: 80001,
      gasPrice: 1000000000, // Gas price dalam wei (opsional)
    },
  },

   
  compilers: {
    solc: {
      version: "0.8.21",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

};
