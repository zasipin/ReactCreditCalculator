import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

class CreditParams extends React.Component{
	render() {
        var {dispatch, sum, percents} = this.props;

        function showSum(){
            return <span>sum: {sum}</span>;
        }

		return (
            <div className="row">
                <div className="credit-form columns small-centered medium-4 small-12">   
                    <form>
                        <label>
                            Sum
                            <input type="number" ref="creditSum" value={sum}
                            onChange={() => {
                                var sum = this.refs.creditSum.value;
                                dispatch(actions.setCreditSum(sum));
                            }}/>
                            <p>sum: {sum} {showSum()}</p>                    
                        </label>

                        <label>
                            Percents
                            <input type="number" ref="percents" value={percents}
                            onChange={() => {
                                var percents = this.refs.percents.value;
                                dispatch(actions.setPercents(percents));
                            }}/>                    
                        </label>
                    </form>    
                </div>
            </div>
		)
	}
};

export default connect((state) => {
    return {
        sum: state.creditProps.sum,
        percents: state.creditProps.percents
    }
})(CreditParams);