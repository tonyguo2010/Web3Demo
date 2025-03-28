
import  Web3 from 'web3';
import Info from './info.js'

var info = new Info();
// const rpcUrl = "https://ethereum-holesky-rpc.publicnode.com";
// const web3 = new Web3(info.pub_url);

const web3 = new Web3(info.testnet_url);

info.add_account(web3)
// info.output_chain_info(web3)
info.account_demo(web3)
// info.trans_demo(web3)

console.log("Finished")


/*

const address = '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984';

// you can find the complete ABI on etherscan.io
// https://etherscan.io/address/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984#code
const abi = [
	{
		name: 'symbol',
		outputs: [{ type: 'string' }],
		type: 'function',
	},
	{
		name: 'totalSupply',
		outputs: [{ type: 'uint256' }],
		type: 'function',
	}
];

// // instantiate the smart contract
const uniswapToken = new web3.eth.Contract(abi, address);
// const symbol = await uniswapToken.methods.symbol().call();

// console.log('Uniswap symbol:', symbol);
*/