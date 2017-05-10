import React from 'react';

import PriceCreditParams from 'PriceCreditParams';
import AnnuitetLoanList from 'AnnuitetLoanList';

class Mortage extends React.Component{
	render() {
		return (
			<div>
				<h3>Mortage component</h3>
				<PriceCreditParams />
				<AnnuitetLoanList />
			</div>	
		)
	}
};

export default Mortage;