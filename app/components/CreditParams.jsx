import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

class CreditParams extends React.Component{
	render() {
        var {dispatch} = this.props;
		return (
            <div className="row">
                <div className="columns small-centered large-6 small-12">   
                    <form>
                        <label>
                            Sum
                        <input type="number" ref="creditSum" onChange={() => {
                            var sum = this.refs.creditSum.value;
                            dispatch(actions.setCreditSum(sum));
                        }}/>                    
                        </label>
                    </form>    
                </div>
        </div>
		)
	}
};

export default connect()(CreditParams);