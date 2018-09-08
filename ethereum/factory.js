import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xA10A89391948368aC85EF2e866F05a9C914DC908'
	);

export default instance;