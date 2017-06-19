import React from 'react';
import {connect} from 'react-redux';

var PaymentsTimetableItem = (props) => {
    var {months} = props;
	return (
        <div>
            <tr>
				<td width="150" className="small-text">Кол-во лет (мес)</td>
				<td className="small-text">Ежемес. платеж</td>
				<td width="150" className="small-text">Общая сумма платежей</td>
				<td width="150" className="small-text">Переплата</td>
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
        months: state.activeCredit.months
    }
})(PaymentsTimetableItem);