require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rice still mixture grace cart equal gesture'; 
let testAccounts = [
"0x2982b1937090a6a12e8c1d6b73a0f23c6aa075836877d76686cfd8da5623433e",
"0x764012b52efc0a4bdf15ed2d3e5b288bb65a11d5e0b21ebf61c457fc11096203",
"0xc5a7df163f9d65a299d731ded4e4b801a14cf81f7acba66fb0d8689634e2b4cd",
"0x5d9fa5e1dc7051a451574b5536932cdebc8cca22876e73a4f5fbc3ff49d1e9fc",
"0x28c1638bbe54b79aea394b380c0f059e9571936055c8691fd8cbce78a01273c2",
"0x1fb10533a64eb2f4e4949acac1433ae5941fbe4cb3b22e42b627e4c32299b3f6",
"0x6e8ef1eeab433faeb02543e1a7d5ec675d2035e317864f8dd21d5aad4bebf7be",
"0x574c0119f415317a2954e0f6f4eb6265f08de602c67fb2b0645fb8af92e0bc11",
"0x3d83c09a4cd8384c05888e9ad6bf50d6077a88f1ea91b6819e9d793a7ab36c08",
"0xbb8944893b7556a3959113cf0e404109e010076e294536b2d46a4656101f51ae"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
