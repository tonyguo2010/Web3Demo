export default class Info{
    constructor(){
        this.account_address = "0xBeC1c873ad01AFa014320Ad21d47e579e09fd3E9"
        this.private_key = "0xcdf338bef0b18b26f7645a7b5cf77d61ff2a63cc0f95178459d0229a1831576b"
        this.trans_hash = "0xb52fb340935a7424e017d7791be06a9b78284dc3b9f4e306b5a1df9dec84cdb9"
        // https://holesky.etherscan.io/address/0x7b8df794b807463f7302b8d8879c736745609bbf#code
        this.contract_address = "0x7b8df794b807463f7302b8d8879c736745609bbf"
        this.pub_url = "https://eth.llamarpc.com"
        this.testnet_url = "https://holesky.drpc.org"
    }

    add_account(web3) {
        web3.eth.accounts.wallet.add(this.private_key);
    }

    async output_chain_info(web3){
        const gas = await web3.eth.getGasPrice();
        const chainId = await web3.eth.getChainId();

        console.log(`Chain ID is ${chainId}`);
        console.log(`Gas price is ${gas}`);
    }

    async account_demo(web3){
        const balance = await web3.eth.getBalance(this.account_address)
        console.log(`balance = ${balance}`);
    }
    
    async trans_demo(web3){
        const trans = await web3.eth.getTransaction(this.trans_hash);
        console.log(`Transaction From: ${trans.from}, To: ${trans.to}, Value: ${trans.value}`);
        console.log(trans)
    }

    async contract_demo(web3){
        const abi = [
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "name",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
        ];

        const contract = new web3.eth.Contract(abi, this.contract_address);
        const symbol = await contract.methods.symbol().call();
        console.log('Contract symbol:', symbol);
        const total = await contract.methods.totalSupply().call();
        console.log('Contract total supply:', total)
        const name = await contract.methods.name().call();
        console.log('Contract name is ', name)
    }
}
