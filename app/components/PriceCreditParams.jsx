import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

class PriceCreditParams extends React.Component{
	render() {
        var {dispatch, sum, percents, step, price, downPayment} = this.props;
        var min = 0;

		return (
            <div>
                    <div className="row">
                        <div className="small-7 columns">
                            <label for="price" className="text-right middle">Стоимость</label>
                        </div>
                        <div className="small-5 columns">
                            <input type="number" id="price" ref="price" value={price} step={step} min={min}
                            onChange={() => {
                                var price = this.refs.price.value,
                                    downPayment = this.refs.downPayment.value;
                                dispatch(actions.setPrice(price, downPayment));
                            }}/>                  
                        </div>
                    </div>
                    <div className="row">    
                        <div className="small-7 columns">
                            <label for="downPayment" className="text-right middle">Первоначальный взнос</label>
                        </div>
                        <div className="small-5 columns">                            
                            <input type="number" id="downPayment" ref="downPayment" value={downPayment} step={step} min={min}
                            onChange={() => {
                                var downPayment = this.refs.downPayment.value,
                                    price = this.refs.price.value;
                                dispatch(actions.setDownPayment(downPayment, price));
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