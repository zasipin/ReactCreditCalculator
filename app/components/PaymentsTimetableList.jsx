import React from 'react';
import {connect} from 'react-redux';
import PaymentsTimetableItem from 'PaymentsTimetableItem';

export class PaymentsTimetableList extends React.Component{
	
	render() {
		
		return (
		<div>
			Payments list
		</div>
		)
	}
};

export default connect(
	(state) => {
    return { 
		annuitetPayments: state.annuitetPayments
	}
}
)(PaymentsTimetableList);