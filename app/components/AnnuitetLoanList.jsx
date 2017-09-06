import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import AnnuitetCreditComponent from 'AnnuitetCreditComponent';
import AddMonthsButton from 'AddMonthsButton';

export class AnnuitetLoanList extends React.Component{
	
	render() {
		var {annuitetPayments} = this.props;
		var currentRouteName = this.props.location ? this.props.location.pathname : '';

		var renderAnnuitetLoanList = () => {
			return annuitetPayments.map((item, index) => {
				return <AnnuitetCreditComponent key={item.getData().months} {...item.getData()} currentRouteName={currentRouteName}/>
			});
		}

		return (
		<div className="row">
			<div className="small-10 small-offset-1 medium-8 medium-offset-2">
				<AddMonthsButton/>
				<table className="unstriped loan-table">
					<thead>
							<tr>
								<th width="50" className="small-text">Удалить</th>
								<th width="100" className="small-text">Кол-во лет (мес)</th>
								<th width="150" className="small-text">Ежемес. платеж</th>
								<th width="150" className="small-text">Общая сумма платежей</th>
								<th width="100" className="small-text">Переплата</th>
								<th width="100" className="small-text">Переплата %</th>
							</tr>
						</thead>
						<tbody>
							{renderAnnuitetLoanList()}			
						</tbody>	
				</table>
			</div>	
		</div>
		)
	}
};

export default withRouter(connect((state) => {
    return { 
		annuitetPayments: state.annuitetPayments
	}
})(AnnuitetLoanList));