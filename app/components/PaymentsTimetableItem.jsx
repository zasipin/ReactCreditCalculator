import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {getTranslate} from 'react-localize-redux';
import * as actions from 'actions';

export class PaymentsTimetableItem extends React.Component{

    onChangeAdditionalPaymentHandler = (e) => {
        let {payment, dispatch} = this.props,
             extraPay = e.target.value,
             months = payment.getData().months;
        if (isNaN(parseFloat(extraPay))) return;
        dispatch(actions.setAdditionalPaymentItem(months, extraPay));
    }

    render() {
        var {payment, months, translate} = this.props;
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
                            onChange={this.onChangeAdditionalPaymentHandler}
                            /></span></td>
                </tr>
            // </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        months: state.activeCredit.months,
        translate: getTranslate(state.locale)
    }
};

export default connect(mapStateToProps)(PaymentsTimetableItem);