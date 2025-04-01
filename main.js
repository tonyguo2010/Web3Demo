
import  Web3 from 'web3';
import Info from './info.js'

var info = new Info();

const web3 = new Web3(info.testnet_url);

info.add_account(web3)
info.output_chain_info(web3)
info.account_demo(web3)
info.trans_demo(web3)
info.contract_demo(web3)

console.log("Finished")

