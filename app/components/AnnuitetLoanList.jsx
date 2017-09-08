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
		<div className="row loan-list-wrapper">
			<div className="small-12 medium-8 medium-offset-2">
				<AddMonthsButton/>
				<table className="unstriped loan-table">
					<thead>
							<tr>
								<th className="small-text" style={{width:"32px"}}>Удалить</th>
								<th className="small-text" style={{width:"15%"}}>Кол-во лет (мес)</th>
								<th className="small-text" style={{width:"23%"}}>Ежемес. платеж</th>
								<th className="small-text" style={{width:"23%"}}>Общая сумма платежей</th>
								<th className="small-text" style={{width:"15%"}}>Переплата</th>
								<th className="small-text" style={{width:"15%"}}>Переплата %</th>
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