import React from 'react';
import {connect} from 'react-redux';
import {getTranslate} from 'react-localize-redux';
import * as actions from 'actions';

export class PaymentsTimetableItem extends React.Component{

    render() {
        var {payment, months, translate, dispatch} = this.props;
        var paymentState = payment.getData();
        let min = 0;
        return (
            // <div>
                <tr>
                    <td>{parseInt(months - paymentState.months + 1)}</td>
                    <td>{parseInt(paymentState.monthlyPay)} {translate('currency')}</td>
                    <td><span className="dark-text">{parseInt(paymentState.paymentForCredit)}</span> {translate('currency')}</td>
                    <td><span className="dark-text">{parseInt(paymentState.paymentForPercents)}</span> {translate('currency')}</td>
                    <td><span className="dark-text">{parseInt(paymentState.leftToPay)}</span> {translate('currency')}</td>
                    <td><span className="dark-text">
                    <input type="number" id="additionalPayment" name="additionalPayment" value={paymentState.extraPay} min={min}
                            onChange={(e) => {
                                var extraPay = e.target.value;
                                if (isNaN(parseFloat(extraPay))) return;
                                dispatch(actions.setAdditionalPaymentItem(months, extraPay));
                            }}/></span></td>
                </tr>
            // </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    //     // sum: state.creditProps.sum,
    //     percents: state.creditProps.percents,
    //     step: state.creditProps.step,
    //     price: state.creditProps.price,
    //     downPayment: state.creditProps.downPayment
        months: state.activeCredit.months,
        // sum: state.creditParams.sum,
        // percents: state.creditParams.percents
        translate: getTranslate(state.locale)
    }
};

export default connect(mapStateToProps)(PaymentsTimetableItem);