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
			<table className="unstriped loan-table">
				  <thead>
						<tr>
							<th width="150">Кол-во лет (мес)</th>
							<th>Ежемес. платеж</th>
							<th width="150">Общая сумма платежей</th>
							<th width="150">Переплата</th>
							<th width="150">Переплата %</th>
						</tr>
					</thead>
					<tbody>
						{renderAnnutitLoanList()}			
					</tbody>	
			</table>
		</div>
		)
	}
};

export default connect((state) => {
    return { 
		annuitetPayments: state.annuitetPayments
	}
})(AnnuitetLoanList);