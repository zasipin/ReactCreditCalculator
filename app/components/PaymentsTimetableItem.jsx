import React from 'react';
import {connect} from 'react-redux';

export class PaymentsTimetableItem extends React.Component{

    render() {
        var {payment, months} = this.props;
        var paymentState = payment.getData();
        return (
            // <div>
                <tr>
                    <td width="150">{parseInt(months - paymentState.months + 1)}</td>
                    <td >{parseInt(paymentState.monthlyPay)}</td>
                    <td width="150"><span className="dark-text">{parseInt(paymentState.paymentForCredit)}</span> р.</td>
                    <td width="150"><span className="dark-text">{parseInt(paymentState.paymentForPercents)}</span> р.</td>
                    <td width="150"><span className="dark-text">{parseInt(paymentState.leftToPay)}</span> р.</td>
                </tr>
            // </div>
        )
    }
}

export default connect((state) => {
    return {
    //     // sum: state.creditProps.sum,
    //     percents: state.creditProps.percents,
    //     step: state.creditProps.step,
    //     price: state.creditProps.price,
    //     downPayment: state.creditProps.downPayment
        months: state.activeCredit.months,
        // sum: state.creditParams.sum,
        // percents: state.creditParams.percents
    }
})(PaymentsTimetableItem);