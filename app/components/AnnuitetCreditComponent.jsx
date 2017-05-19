import React from 'react';
import {connect} from 'react-redux';

import {AnnuitetCredit} from 'AnnuitetCredit';

export class AnnuitetCreditComponent extends React.Component{
	render() {
        var {overpay, monthlyPay, totalPay, overpayPercentage, months} = this.props;
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

		return (
		<tr>
			<td><div>{months / 12} {renderYear(months/12)}</div><div>{months} мес.</div></td>
			<td>{parseInt(monthlyPay)}</td> 
			<td>{parseInt(totalPay)}</td> 
            <td>{parseInt(overpay)}</td>
			<td>{parseFloat(overpayPercentage).toFixed(2)}</td>
		</tr>
		)
	}
};

export default connect(
	// (state) => {
    // return state.creditProps;
// }
)(AnnuitetCreditComponent);