import React from 'react';
import {connect} from 'react-redux';

var PaymentsTimetableItem = (props) => {
    var {payment} = this.props;
	return (
        <div>
            <tr>
				<td width="150" className="small-text">{payment.months}</td>
				<td className="small-text">{payment.monthlyPayment}</td>
				<td width="150" className="small-text">{payment.paymentForCredit}</td>
				<td width="150" className="small-text">{payment.paymentForPercents}</td>
				<td width="150" className="small-text">Переплата %</td>
			</tr>
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
        // months: state.activeCredit.months,
        // sum: state.creditParams.sum,
        // percents: state.creditParams.percents
    }
})(PaymentsTimetableItem);