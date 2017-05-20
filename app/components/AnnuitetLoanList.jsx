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
		<div className="row">
			<div className="small-10 small-offset-1 medium-8 medium-offset-2">
				<table className="unstriped loan-table">
					<thead>
							<tr>
								<th width="150" className="small-text">Кол-во лет (мес)</th>
								<th className="small-text">Ежемес. платеж</th>
								<th width="150" className="small-text">Общая сумма платежей</th>
								<th width="150" className="small-text">Переплата</th>
								<th width="150" className="small-text">Переплата %</th>
							</tr>
						</thead>
						<tbody>
							{renderAnnutitLoanList()}			
						</tbody>	
				</table>
			</div>	
		</div>
		)
	}
};

export default connect((state) => {
    return { 
		annuitetPayments: state.annuitetPayments
	}
})(AnnuitetLoanList);