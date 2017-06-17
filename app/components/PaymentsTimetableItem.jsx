import React from 'react';
import {connect} from 'react-redux';

var PaymentsTimetableItem = (props) => {
    var {months} = props;
	return (
        <div className="row">
            Item: {months} months
        </div>
    )
}

export default connect((state) => {
    return {
    //     // sum: state.creditProps.sum,
    //     percents: state.creditProps.percents,
    //     step: state.creditProps.step,
    //     price: state.creditProps.price,
    //     downPayment: state.creditProps.downPayment
        months: state.activeCredit.months
    }
})(PaymentsTimetableItem);