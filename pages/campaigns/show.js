import React, { Component } from 'react';
import Layout from '../../components/layout';
import Campaign from '../../ethereum/campaign';
import { Card } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';


class CampaignShow extends Component {

	static async getInitialProps(props)	{
		const campaign = Campaign(props.query.address);

		const summary = await campaign.methods.getSummary().call();

		return {
			minimumContribution: summary[0],
			balance: summary[1],
			requestsCount: summary[2],
			approversCount: summary[3],
			manager: summary[4]

		};
	}

	renderCards() {

		const {
			balance,
			manager,
			minimumContribution,
			requestsCount,
			approversCount
		} = this.props;
		const items = [
			{
				header: manager,
				meta: 'Address of manager',
				description: 'Manager created this campaign',
				style: { overflowWrap: 'break-word' }
			},

			{
				header: minimumContribution,
				meta: 'Minimum Contribution (wei)',
				description: 'You must contribute atleast this much wei to be considered as a contributer'
			},
			{
				header: requestsCount,
				meta: 'Number of requests',
				description: 'A request tries to withdraw from the contract. Requests must be approved by approvers'
			},
			{
				header: approversCount,
				meta: 'Number of approvers',
				description: 'Number of approvers who have donated to this campaign'
			},
			{
				header: web3.utils.fromWei(balance, 'ether'),
				meta: 'campaign Balance in ether',
				description: 'The Balance is how much money the campaign has rasied'
			}

		];

		return <Card.Group items={items} />
	}

	render() {
		return (
			<Layout>
			<h3>campaign Show</h3>
			{this.renderCards()}
			</Layout>
		);
	}
}

export default CampaignShow;
