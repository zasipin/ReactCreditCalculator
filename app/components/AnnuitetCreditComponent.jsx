import React from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router';
import { withRouter, Link } from 'react-router-dom';

import * as actions from 'actions';

import {AnnuitetCredit} from 'AnnuitetCredit';

export class AnnuitetCreditComponent extends React.Component{

	constructor(props){
		super(props);
		this.months  = props.months;
		this.dispatch = props.dispatch;
	}

	onPaymentsClick(e, months) {
		var {dispatch} = this.props;
		// e.preventDefault();
		dispatch(actions.setActiveCreditMonths(months));
		// console.log("On link clicked months", months);
	}

	onRemoveClick = (e) => {
		e.preventDefault();
		this.dispatch(actions.removeMonthsItem(this.months));
		// console.log("Remove clicked, months", this.months);
		
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
		var linkTo;
		if(currentRouteName === '/' || !currentRouteName){
			linkTo = paymentsRoute;			
		} else {
			linkTo = `${currentRouteName}/${paymentsRoute}`;			
		}

		const renderYearNumber = (months) => {
			if(months % 12 == 0)
				return months / 12;
			return parseFloat(months / 12).toFixed(2);			
		}

		return (
		<tr>
			<td className="small-text">
				<button className="button small" type="button" onClick={this.onRemoveClick}>
					{/* <!-- Screen readers will see "close" --> */}
					<span className="show-for-sr">Удалить</span>
					{/* <!-- Visual users will see the X, but not the "Close" text --> */}
					<span aria-hidden="true"><i className="fi-minus"> </i></span>
				</button>
			</td>
			<td className="small-text"><div>{renderYearNumber(months)} {renderYear(months/12)}</div><div>{months} мес.</div></td>
			<td><Link to={linkTo} onClick={(e) => {this.onPaymentsClick(e, months)}} className="show-payments">{parseInt(monthlyPay)}</Link> р.</td> 
			<td><span className="dark-text">{parseInt(totalPay)}</span> р.</td> 
            <td><span className="dark-text">{parseInt(overpay)}</span> р.</td>
			<td><span className="dark-text">{parseFloat(overpayPercentage).toFixed(2)}</span> %</td>
		</tr>
		)
	}
};

export default withRouter(connect(
	// (state) => {
    // return state.creditProps;
// }
)(AnnuitetCreditComponent));