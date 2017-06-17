import React from 'react';
import {connect} from 'react-redux';
import PaymentsTimetableItem from 'PaymentsTimetableItem';

export class PaymentsTimetableList extends React.Component{
	
	render() {
		
		return (
		<div className="row">
			<div className="small-10 small-offset-1 medium-8 medium-offset-2">
				<table className="unstriped loan-table">
					<thead>
						<tr>
							<th width="150" className="small-text">Кол-во лет (мес)</th>
							<th className="small-text">Ежемес. платеж</th>
							<th width="150" className="small-text">Общая сумма платежей</th>
							<th width="150" className="small-text">Переплата</th>
							<th width="150" className="small-text">Переплата %</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>	
				<PaymentsTimetableItem />
			</div>
		</div>
		)
	}
};

export default connect(
	(state) => {
    return { 
		annuitetPayments: state.annuitetPayments
	}
}
)(PaymentsTimetableList);