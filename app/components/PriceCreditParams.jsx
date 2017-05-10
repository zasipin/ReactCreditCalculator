import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

class PriceCreditParams extends React.Component{
	render() {
        var {dispatch, sum, percents, step, price, downPayment} = this.props;
        var min = 0;

		return (
            <div className="row">
                <div className="credit-form columns small-centered medium-4 small-12">   
                    <form>
                        <label>
                            Price
                            <input type="number" ref="price" value={price} step={step} min={min}
                            onChange={() => {
                                var price = this.refs.price.value,
                                    downPayment = this.refs.downPayment.value;
                                dispatch(actions.setPrice(price, downPayment));
                            }}/>                  
                        </label>
                        
                        <label>
                            Down payment
                            <input type="number" ref="downPayment" value={downPayment} step={step} min={min}
                            onChange={() => {
                                var downPayment = this.refs.downPayment.value,
                                    price = this.refs.price.value;
                                dispatch(actions.setDownPayment(downPayment, price));
                            }}/>                  
                        </label>

                        <label>
                            Percents
                            <input type="number" ref="percents" value={percents} min={min}
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
        // sum: state.creditProps.sum,
        percents: state.creditProps.percents,
        step: state.creditProps.step,
        price: state.creditProps.price,
        downPayment: state.creditProps.downPayment
    }
})(PriceCreditParams);