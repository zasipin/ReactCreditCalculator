import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import PaymentsTimetableList from 'PaymentsTimetableList';

var PaymentsTimetable = (props) => {
    var {match, months, history} = props;
    // console.log("match:", match);

    var renderMonths = () => {
        return months ? `, на ${months} месяцев` : '';
    }   
    // console.log(props);

    var goBack = (e) => {
        e.preventDefault();
        history.goBack();
    }

    return (
        <div className="row">
            <div><Link to="/" onClick={(e) => {goBack(e);}} >Назад</Link>  <span className="text-center">График платежей{renderMonths()}</span></div>
            <PaymentsTimetableList />
        </div>
    )
}

export default connect(
	(state) => {
    return { 
		months: state.activeCredit.months,
	}
})
(PaymentsTimetable);