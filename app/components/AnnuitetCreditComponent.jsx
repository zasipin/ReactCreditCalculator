import React from 'react';
import {connect} from 'react-redux';

import {AnnuitetCredit} from 'AnnuitetCredit';

export class AnnuitetCreditComponent extends React.Component{
	render() {
        var {overpay, monthlyPay, totalPay, overpayPercentage, months} = this.props;
        // var credit = new AnnuitetCredit(sum, percents, 12);
        // var creditData = credit.getData();
		return (
		<div>
			months: {months}&nbsp;
			payment: {parseInt(monthlyPay)}&nbsp; 
			totalPay: {parseInt(totalPay)}&nbsp; 
            overpay: {parseInt(overpay)}&nbsp;
			overpayPercentage: {parseFloat(overpayPercentage).toFixed(2)}
		</div>
		)
	}
};

export default connect(
	// (state) => {
    // return state.creditProps;
// }
)(AnnuitetCreditComponent);