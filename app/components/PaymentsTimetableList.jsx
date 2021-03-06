import React from 'react';
import {connect} from 'react-redux';
import PaymentsTimetableItem from 'PaymentsTimetableItem';
import {AnnuitetMonthlyPayment} from 'AnnuitetMonthlyPayment';
import { getTranslate } from 'react-localize-redux';
import * as actions from 'actions'

export class PaymentsTimetableList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: []
		}
		this.firstShowRows = 25;
		this.currency = this.props.translate('currency');
	}	

	componentWillMount(){
		//var {sum, percents, months, dispatch} = this.props;
		//dispatch(actions.setPaymentsTimetable({sum, percents, months}));
		
	}
	componentDidMount(){
		this.constructTimetableItems(this.props);
	}
	renderEmptyRow = () => {
		let {translate} = this.props;
		return (
			<tr>
				<td colSpan='6' className="text-center">{translate('noData')}</td>
			</tr>
		)
	}

	constructTimetableItems = ({sum, percents, months, paymentsTimetable}) => {
		var index = 0, items = [];
		let itemsPartial = [];
		
		items = paymentsTimetable.map((payment, index) => {
			return (<PaymentsTimetableItem key={payment.state.months} payment={payment} currency={this.currency}/>)} );

		this.setState(()=> ({items}));

	}

	componentWillReceiveProps(nextProps){
		let {paymentsTimetable : nextPaymentsTimetable, translate: nextTranslate } = nextProps;
		if(nextPaymentsTimetable != this.props.paymentsTimetable || 
			this.props.translate != nextTranslate	){
			
			this.currency = nextTranslate('currency');
			this.constructTimetableItems(nextProps);
		}
	}

	render() {
		// console.log(this);
		var {sum, percents, months, translate, paymentsTimetable} = this.props;
		
		return (
		  <div className="row"> 
				<div className="small-12 medium-8 medium-offset-2 columns">
					<table className="unstriped loan-table">
						<thead>
							<tr>
								<th className="small-text" style={{width:"7%"}}>{translate('month')}</th>
								<th className="small-text" style={{width:"18%"}}>{translate('monthlyPayment')}</th>
								<th className="small-text" style={{width:"18%"}}>{translate('paymentForLoan')}</th>
								<th className="small-text" style={{width:"18%"}}>{translate('paymentFor')} %</th>
								<th className="small-text" style={{width:"20%"}}>{translate('sumLeftToPay')}</th>
								<th className="small-text" style={{width:"20%"}}>{translate('additionalPayment')}</th>
							</tr>
						</thead>
						<tbody>
							{/* {renderTimetableItems()} */}
							{this.state.items.length > 0 ? this.state.items : this.renderEmptyRow() }
						</tbody>
					</table>	
					
				</div>
		  </div>
		)
	}
};

const mapStateToProps = (state) => {
    return { 
		// annuitetPayments: state.annuitetPayments,
		months: state.activeCredit.months,
    sum: state.creditProps.sum,
		percents: state.creditProps.percents,
		translate: getTranslate(state.locale),
		paymentsTimetable: state.paymentsTimetable
	}
}

export default connect(mapStateToProps)(PaymentsTimetableList);