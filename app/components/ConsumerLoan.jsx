import React from 'react';
import {connect} from 'react-redux';

import CreditParams from 'CreditParams';
import CreditParamsForm from 'CreditParamsForm';

// import AnnuitetLoanList from 'AnnuitetLoanList';

export class ConsumerLoan extends React.Component{
	
	render() {
		// var {annuitetPayments} = this.props;
		// var renderAnnutitLoanList = () => {
		// 	return annuitetPayments.map((item, index) => {
		// 		return <AnnuitetCreditComponent key={index} {...item.getData()}/>
		// 	});
		// }
		// console.log(this.props);
		return (
		<div>
			<CreditParamsForm>
				<CreditParams />
			</CreditParamsForm>
			{/*<AnnuitetLoanList />*/}
			
			{this.props.children}
		</div>
		)
	}
};

export default connect(
// 	(state) => {
//     return { 
// 		annuitetPayments: state.annuitetPayments
// 	}
// }
)(ConsumerLoan);

