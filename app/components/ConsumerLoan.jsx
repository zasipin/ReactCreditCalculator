import React from 'react';
import {connect} from 'react-redux';

import CreditParams from 'CreditParams';


export class ConsumerLoan extends React.Component{
	render() {
		return (
		<div>
			<h3>ConsumerCredit component</h3>
			<CreditParams />
		</div>
		)
	}
};

export default connect((state) => {
    return state;
})(ConsumerLoan);