import React from 'react';
import {connect} from 'react-redux';

var PaymentsTimetableItem = (props) => {
	return (
        <div className="row">
            Item
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
    }
})(PaymentsTimetableItem);