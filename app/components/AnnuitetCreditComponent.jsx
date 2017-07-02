import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as actions from 'actions';

import {AnnuitetCredit} from 'AnnuitetCredit';

export class AnnuitetCreditComponent extends React.Component{

	onPaymentsClick(e, months) {
		var {dispatch} = this.props;
		// e.preventDefault();
		dispatch(actions.setActiveCreditMonths(months));
		// console.log("On link clicked months", months);
	}

	render() {
        var {overpay, monthlyPay, totalPay, overpayPercentage, months, currentRouteName} = this.props;
		
        // var credit = new AnnuitetCredit(sum, percents, 12);
        // var creditData = credit.getData();

		var renderYear = (year) => {
			year = year > 0 ? year : 0;
			if(year == 1)
				return 'год';
			if(year > 1 && year < 5)
				return 'года';
			return 'лет';
		}
		// console.log(this);
		// var currentRouteName = this.props.routes[this.props.routes.length - 1];
		var paymentsRoute = 'payments';
		var linkTo = currentRouteName ? `${currentRouteName}/${paymentsRoute}` : paymentsRoute;
		return (
		<tr>
			<td className="small-text"><div>{months / 12} {renderYear(months/12)}</div><div>{months} мес.</div></td>
			<td><Link to={linkTo} onClick={(e) => {this.onPaymentsClick(e, months)}} className="show-payments">{parseInt(monthlyPay)} р.</Link></td> 
			<td><span className="dark-text">{parseInt(totalPay)}</span> р.</td> 
            <td><span className="dark-text">{parseInt(overpay)}</span> р.</td>
			<td><span className="dark-text">{parseFloat(overpayPercentage).toFixed(2)}</span> %</td>
		</tr>
		)
	}
};

export default connect(
	// (state) => {
    // return state.creditProps;
// }
)(AnnuitetCreditComponent);