import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

class CreditParams extends React.Component{
	render() {
        var {dispatch, sum, percents, step} = this.props;
        var min = 0;

		return (
            <div>
                <label>
                            Сумма кредита
                            <input type="number" ref="creditSum" value={sum} step={step} min={min}
                            onChange={() => {
                                var sum = this.refs.creditSum.value;
                                dispatch(actions.setCreditSum(sum));
                            }}/>                  
                        </label>

                        <label>
                            Проценты годовые
                            <input type="number" ref="percents" value={percents} min={min}
                            onChange={() => {
                                var percents = this.refs.percents.value;
                                dispatch(actions.setPercents(percents));
                            }}/>                    
                        </label>
               

            {/*<div className="row">
                <div className="credit-form columns small-centered medium-4 small-12">   
                    <form>
                        
                    </form>    
                </div>
            </div>*/}
            </div> 
		)
	}
};

export default connect((state) => {
    return {
        sum: state.creditProps.sum,
        percents: state.creditProps.percents,
        step: state.creditProps.step
    }
})(CreditParams);