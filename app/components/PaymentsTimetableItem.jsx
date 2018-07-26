import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {getTranslate} from 'react-localize-redux';
import * as actions from 'actions';

export class PaymentsTimetableItem extends React.Component{

    constructor(props){
        super(props);
        let {payment, months, currency} = this.props;

        this.months = months;
        this.currency = currency;//translate('currency');
        this.paymentState = payment.getData()

        this.state = {
            // months, 
            // translate, 
            // paymentState: payment.getData(),
            // currency: translate('currency')
        }
    }

    componentWillReceiveProps(nextProps){
        let {payment : nextPayment } = nextProps;
        let nextPaymentState = nextPayment.getData();
        if(nextPaymentState.extraPay != this.paymentState.extraPay
            || nextPaymentState.leftToPay != this.paymentState.leftToPay
            || nextPaymentState.monthlyPay != this.paymentState.monthlyPay
            || nextPaymentState.paymentForPercents != this.paymentState.paymentForPercents
            || nextPaymentState.paymentForCredit != this.paymentState.paymentForCredit )
        {
            this.paymentState = nextPaymentState;
        } else {
            //this.translate = nextProps.translate;
            this.currency = nextProps.currency;//nextProps.translate('currency');
        }
	}

    onChangeAdditionalPaymentHandler = (e) => {
        let {dispatch} = this.props,
             extraPay = e.target.value,
             months = this.paymentState.months;
        if (isNaN(parseFloat(extraPay))) return;
        dispatch(actions.setAdditionalPaymentItem(months, extraPay));
    }

    render() {

        return (
            // <div>
                <tr>
                    <td>{this.months - this.paymentState.months + 1}</td>
                    <td>{this.paymentState.monthlyPay} {this.currency}</td>
                    <td><span className="dark-text">{this.paymentState.paymentForCredit}</span> {this.currency}</td>
                    <td><span className="dark-text">{this.paymentState.paymentForPercents}</span> {this.currency}</td>
                    <td><span className="dark-text">{this.paymentState.leftToPay}</span> {this.currency}</td>
                    <td><span className="dark-text">
                    <input type="number" id="additionalPayment" name="additionalPayment" value={this.paymentState.extraPay} min="0"
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
        //translate: getTranslate(state.locale)
    }
};

export default connect(mapStateToProps)(PaymentsTimetableItem);