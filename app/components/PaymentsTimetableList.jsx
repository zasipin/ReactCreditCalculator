import React from 'react';
import {connect} from 'react-redux';
import PaymentsTimetableItem from 'PaymentsTimetableItem';
import {AnnuitetMonthlyPayment} from 'AnnuitetMonthlyPayment';

export class PaymentsTimetableList extends React.Component{

	render() {
		// console.log(this);
		var {sum, percents, months} = this.props;

		var renderTimetableItems = () => {
			var index = 0, items = [];
			for(;months > 0; months--)
			{
				// sum = 0, percents = 0, months = 0, extraPay = 0
				var payment = new AnnuitetMonthlyPayment(sum, percents, months);
				items.push(<PaymentsTimetableItem key={index} payment={payment} />);
				sum = sum - payment.getData().paymentForCredit;
				index++;
			}
			return items;
		}

		return (
		<div className="row">
			<div className="small-10 small-offset-1 medium-8 medium-offset-2">
				<table className="unstriped loan-table">
					<thead>
						<tr>
							<th width="150" className="small-text">Месяц</th>
							<th className="small-text">Ежемес. платеж</th>
							<th width="150" className="small-text">Платеж за кредит</th>
							<th width="150" className="small-text">Платеж за %</th>
							<th width="150" className="small-text">Остаток долга</th>
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