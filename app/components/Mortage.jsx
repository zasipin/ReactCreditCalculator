import React from 'react';
import { Route } from 'react-router-dom';

import PriceCreditParams from 'PriceCreditParams';
import CreditParamsForm from 'CreditParamsForm';
import AnnuitetLoanList from 'AnnuitetLoanList';
import BigTextLabel from 'BigTextLabel';
import PaymentsTimetable from 'PaymentsTimetable';

import { localize } from 'react-localize-redux';

class Mortage extends React.Component{
	
	render() {
		var { translate } = this.props;
		return (
			<div>
				<div className="show-for-medium">
					<BigTextLabel>
						{ translate('makeDecision') }
						<br/>
						{ translate('loanCalcRod') }
					</BigTextLabel>	
				</div>
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

export default localize(Mortage, 'locale');