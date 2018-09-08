const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
	'mule crouch dismiss unique aim any helmet cycle door language knock meat',
	'https://rinkeby.infura.io/v3/c245a5e06f724bb8b3149c2f73d21a87'
);

const web3 = new Web3(provider);


const INITIAL_MESSAGE = 'Hi there!';
const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attemting to deploy from account', accounts[0]);

const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
	.deploy({ data: '0x'+compiledFactory.bytecode })
	.send({ gas: '1000000', from: accounts[0]});

	console.log('Contract deployed to', result.options.address);
}; // we are using function just to use async await sytax and sice we have multiple accounts linked witha single mneumonic we will hae to select one.

deploy();