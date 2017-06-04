import React from 'react';

import PriceCreditParams from 'PriceCreditParams';
import CreditParamsForm from 'CreditParamsForm';
import AnnuitetLoanList from 'AnnuitetLoanList';
import BigTextLabel from 'BigTextLabel';

class Mortage extends React.Component{
	render() {
		return (
			<div>
				<BigTextLabel>
					Примите решение с помощью простого<br/> ипотечного калькулятора
				</BigTextLabel>	
				<CreditParamsForm>
					<PriceCreditParams />
				</CreditParamsForm>
				<AnnuitetLoanList />
			</div>	
		)
	}
};

export default Mortage;