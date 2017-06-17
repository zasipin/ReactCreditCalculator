import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

class CreditParams extends React.Component{
	render() {
        var {dispatch, sum, percents, step} = this.props;
        var min = 0;

		return (
            <div>
                <div className="row">
                    <div className="small-7 columns">
                         <label for="creditSum" className="text-right middle">Сумма кредита</label>
                    </div>

                    <div className="small-5 columns">                            
                            <input type="number" id="creditSum" ref="creditSum" value={sum} step={step} min={min}
                            onChange={() => {
                                var sum = this.refs.creditSum.value;
                                dispatch(actions.setCreditSum(sum));
                            }}/>                  
                    </div>
                </div>

                <div className="row">
                    <div className="small-7 columns">
                         <label for="percents" className="text-right middle">Проценты годовые</label>
                    </div>
                    <div className="small-5 columns">
                            <input type="number" id="percents" ref="percents" value={percents} min={min}
                            onChange={() => {
                                var percents = this.refs.percents.value;
                                dispatch(actions.setPercents(percents));
                            }}/>                    
                    </div>
               
                </div>        
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