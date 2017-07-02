import React from 'react';
import PriceCreditParams from 'PriceCreditParams';
import CreditParamsForm from 'CreditParamsForm';
import AnnuitetLoanList from 'AnnuitetLoanList';

class CarLoan extends React.Component{
	render() {
		return (
		<div>	
			<CreditParamsForm>
				<PriceCreditParams />
			</CreditParamsForm>
			{this.props.children}
			{/*<AnnuitetLoanList />*/}
			
		</div>
		)
	}
};

export default CarLoan;