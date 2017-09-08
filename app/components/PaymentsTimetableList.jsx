import React from 'react';
import {connect} from 'react-redux';
import PaymentsTimetableItem from 'PaymentsTimetableItem';
import {AnnuitetMonthlyPayment} from 'AnnuitetMonthlyPayment';

export class PaymentsTimetableList extends React.Component{

	render() {
		// console.log(this);
		var {sum, percents, months} = this.props;
		// var currentRouteName = this.props.location.pathname;

		var renderEmptyRow = () => {
			return (
				<tr>
					<td colSpan='5' className="text-center">Нет данных</td>
				</tr>
			)
		}
		
		var renderTimetableItems = () => {
			var index = 0, items = [];
			for(;months > 0; months--)
			{
				// sum = 0, percents = 0, months = 0, extraPay = 0
				var payment = new AnnuitetMonthlyPayment(sum, percents, months);
				items.push(<PaymentsTimetableItem key={index} payment={payment}/>);
				sum = sum - payment.getData().paymentForCredit;
				index++;
			}
			
			return items.length > 0 ? items : renderEmptyRow();
		}

		

		return (
		  <div className="row">
				<div className="small-12 medium-8 medium-offset-2 columns">
					<table className="unstriped loan-table">
						<thead>
							<tr>
								<th className="small-text" style={{width:"10%"}}>Месяц</th>
								<th className="small-text" style={{width:"23%"}}>Ежемес. платеж</th>
								<th className="small-text" style={{width:"23%"}}>Платеж за кредит</th>
								<th className="small-text" style={{width:"20%"}}>Платеж за %</th>
								<th className="small-text" style={{width:"23%"}}>Остаток долга</th>
							</tr>
						</thead>
						<tbody>
							{renderTimetableItems()}
						</tbody>
					</table>	
					
				</div>
		  </div>
		)
	}
};

export default connect(
	(state) => {
    return { 
		// annuitetPayments: state.annuitetPayments,
		months: state.activeCredit.months,
        sum: state.creditProps.sum,
        percents: state.creditProps.percents
	}
}
)(PaymentsTimetableList);