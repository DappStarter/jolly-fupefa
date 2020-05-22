require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stool deny screen proud gentle light army gift'; 
let testAccounts = [
"0x06c54a7a3191949def4151cba32d29261b5d550f3eacb9af68c6c358c67df9d1",
"0x1f40ba877bfe0f268b1c04a124599c539a30b8b9e18ab16053941991f814f2b8",
"0x13201b6451bb196d04a98a65c142466cf993a7daa5fa24cfd509cd414103f4ed",
"0xc200d6fa010d962da0e175ddd9c370dbb28174f94c5b87f2da6559862b3d2640",
"0xba372e59160511a5b5e97006944313cd03afe0c0fb874717c9b119b9717b3b10",
"0x7c381f748468f98e90646797ca36876c62408725705e09bfec6fdc24c11b1ccb",
"0xc1c6a21a5f17c9ea917c4c682ea1e7fa5c9fd8c2bfbdefd2b5b604c92da44d65",
"0x1f0249a61d95e1c0799edb0b36cc7b3f6b76c8f13d4887801a60a474f2b52d67",
"0x854e156609ccfb0079c605f4bdb3917e9d154758306bd8f453b6b29592f8f4b5",
"0xf0612c2f2639bbfde1e0441797191f4006304ffca14739ba3aa9216cf597c679"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
