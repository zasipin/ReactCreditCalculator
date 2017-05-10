import React from 'react';
import {connect} from 'react-redux';

import AnnuitetCreditComponent from 'AnnuitetCreditComponent';


export class AnnuitetLoanList extends React.Component{
	
	render() {
		var {annuitetPayments} = this.props;
		var renderAnnutitLoanList = () => {
			return annuitetPayments.map((item, index) => {
				return <AnnuitetCreditComponent key={index} {...item.getData()}/>
			});
		}

		return (
		<div>
			{renderAnnutitLoanList()}			
		</div>
		)
	}
};

export default connect((state) => {
    return { 
		annuitetPayments: state.annuitetPayments
	}
})(AnnuitetLoanList);