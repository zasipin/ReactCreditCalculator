import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {getTranslate} from 'react-localize-redux';
import * as actions from 'actions';

export class PaymentsTimetableItem extends React.Component{

    constructor(props){
        super(props);
        let {payment, months, translate} = this.props;
        this.state = {
            // payment, 
            months, 
            translate, 
            paymentState: payment.getData(),
            currency: translate('currency')
        }
    }

    componentWillReceiveProps(nextProps){
        let {payment : nextPayment } = nextProps;
        let nextPaymentState = nextPayment.getData();
        if(nextPaymentState.extraPay != this.state.paymentState.extraPay
            || nextPaymentState.leftToPay != this.state.paymentState.leftToPay
            || nextPaymentState.monthlyPay != this.state.paymentState.monthlyPay
            || nextPaymentState.paymentForPercents != this.state.paymentState.paymentForPercents
            || nextPaymentState.paymentForCredit != this.state.paymentState.paymentForCredit )
        {
            this.setState((prevState) => {
                return {
                    // ...this.state,
                    paymentState: nextPaymentState,
                    currency: prevState.translate('currency')
                }
            });
        } else {
            this.setState((prevState) => {
                return {
                    // ...this.state,
                    translate: nextProps.translate,
                    currency: nextProps.translate('currency')
                }
            });
        }
	}

    onChangeAdditionalPaymentHandler = (e) => {
        let {dispatch} = this.props,
             extraPay = e.target.value,
             months = this.state.paymentState.months;
        if (isNaN(parseFloat(extraPay))) return;
        dispatch(actions.setAdditionalPaymentItem(months, extraPay));
    }

    render() {
        // var {payment, months, translate} = this.props;
        // var paymentState = payment.getData();
        // let min = 0;

        return (
            // <div>
                <tr>
                    <td>{this.state.months - this.state.paymentState.months + 1}</td>
                    <td>{this.state.paymentState.monthlyPay} {this.state.currency}</td>
                    <td><span className="dark-text">{this.state.paymentState.paymentForCredit}</span> {this.state.currency}</td>
                    <td><span className="dark-text">{this.state.paymentState.paymentForPercents}</span> {this.state.currency}</td>
                    <td><span className="dark-text">{this.state.paymentState.leftToPay}</span> {this.state.currency}</td>
                    <td><span className="dark-text">
                    <input type="number" id="additionalPayment" name="additionalPayment" value={this.state.paymentState.extraPay} min="0"
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