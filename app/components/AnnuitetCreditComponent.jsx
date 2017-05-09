import React from 'react';
import {connect} from 'react-redux';

import {AnnuitetCredit} from 'AnnuitetCredit';

export class AnnuitetCreditComponent extends React.Component{
	render() {
        var {sum, percents} = this.props;
        var credit = new AnnuitetCredit(sum, percents, 12);
        var creditData = credit.getData();
		return (
		<div>
			sum: {sum}, percents: {percents}
            overpay: {creditData.overpay}
		</div>
		)
	}
};

export default connect((state) => {
    return state.creditProps;
})(AnnuitetCreditComponent);