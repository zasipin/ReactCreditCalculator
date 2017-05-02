import React from 'react';
import {connect} from 'react-redux';

import CreditParams from 'CreditParams';
import AnnuitetCreditComponent from 'AnnuitetCreditComponent';


export class ConsumerLoan extends React.Component{
	render() {
		return (
		<div>
			<h3>ConsumerCredit component</h3>
			<CreditParams />
			<AnnuitetCreditComponent />
		</div>
		)
	}
};

export default connect((state) => {
    return state;
})(ConsumerLoan);