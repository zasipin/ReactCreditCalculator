import React from 'react';
import PaymentsTimetableList from 'PaymentsTimetableList';

var PaymentsTimetable = (props) => {
    var {match} = props;
    // console.log("match1");
    // console.log("match:", match);

	return (
        <div className="row">
            <div className="text-center">График платежей</div>
            <PaymentsTimetableList />
        </div>
    )
}

export default PaymentsTimetable;