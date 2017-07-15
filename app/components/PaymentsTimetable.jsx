import React from 'react';
// import {Link} from 'react-router';
import {connect} from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import PaymentsTimetableList from 'PaymentsTimetableList';
import BackLink from 'BackLink';

var PaymentsTimetable = (props) => {
    var {match, months, history} = props;
    
    var renderMonths = () => {
        return months ? `, на ${months} месяцев` : '';
    }   
    // console.log(props);



    return (
        <div className="row">
            <div className="small-10 small-offset-1 medium-8 medium-offset-2">
                {/*<Link to="/" className="float-left" onClick={(e) => {goBack(e);}} >Назад</Link>*/}
                <BackLink linkHistory={history}/>
                <div className="text-center">График платежей{renderMonths()}</div></div>
            <PaymentsTimetableList />
        </div>
    )
}

export default withRouter(connect(
	(state) => {
    return { 
		months: state.activeCredit.months,
	}
})
(PaymentsTimetable));