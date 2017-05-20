import React from 'react';
import PriceCreditParams from 'PriceCreditParams';
import CreditParamsForm from 'CreditParamsForm';

class CarLoan extends React.Component{
	render() {
		return (
		<div>	
			<CreditParamsForm>
				<PriceCreditParams />
			</CreditParamsForm>
		</div>
		)
	}
};

export default CarLoan;