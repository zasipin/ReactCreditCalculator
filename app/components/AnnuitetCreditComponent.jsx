import React from 'react';
import {connect} from 'react-redux';

export class AnnuitetCreditComponent extends React.Component{
	render() {
        var {sum, percents} = this.props;

		return (
		<div>
			sum: {sum}, percents: {percents}
		</div>
		)
	}
};

export default connect((state) => {
    return state.creditProps;
})(AnnuitetCreditComponent);