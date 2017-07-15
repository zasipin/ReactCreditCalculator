import React from 'react';
import { Route } from 'react-router-dom';

import PriceCreditParams from 'PriceCreditParams';
import CreditParamsForm from 'CreditParamsForm';
import AnnuitetLoanList from 'AnnuitetLoanList';
import BigTextLabel from 'BigTextLabel';
import PaymentsTimetable from 'PaymentsTimetable';

class Mortage extends React.Component{
	
	render() {
		// console.log(this.props);
		return (
			<div>
				<BigTextLabel>
					Примите решение с помощью простого<br/> ипотечного калькулятора
				</BigTextLabel>	
				<CreditParamsForm>
					<PriceCreditParams />
				</CreditParamsForm>

				<Route exact path="/mortage" component={AnnuitetLoanList}/>
				<Route exact path="/mortage/payments" component={PaymentsTimetable}/>

				{this.props.children}
				
			</div>	
		)
	}
};

export default Mortage;