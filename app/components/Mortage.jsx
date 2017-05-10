import React from 'react';

import PriceCreditParams from 'PriceCreditParams';
import CreditParamsForm from 'CreditParamsForm';
import AnnuitetLoanList from 'AnnuitetLoanList';

class Mortage extends React.Component{
	render() {
		return (
			<div>
				<h3>Mortage component</h3>
				<CreditParamsForm>
					<PriceCreditParams />
				</CreditParamsForm>
				<AnnuitetLoanList />
			</div>	
		)
	}
};

export default Mortage;