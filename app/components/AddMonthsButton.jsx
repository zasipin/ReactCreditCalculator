import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from 'actions';

class AddMonthsButton extends React.Component {
    
  render() {

    const onAddMonths = (e) => {
      e.preventDefault();
      var months = this.refs.monthsToAdd.value;
      dispatch(actions.addMonthsItem(sum, percents, months));
      this.refs.monthsToAdd.value = 0;
    }

    var {isAddingMonths, sum, percents, dispatch} = this.props;

    const inputFieldRender = () => {
      if(isAddingMonths){
        return (
          <form className='add-button-form'>
            <div className="row">
              <div className="small-6 columns">
                <label className="text-right middle" for="monthsToAdd">
                  Добавить период (в месяцах)
                </label>
              </div>
              <div className="small-3 columns">
                <input type="number" name="monthsToAdd" aria-describedby="nameHelpText" ref="monthsToAdd" min={1}/>
              </div>
              <div className="small-3 columns">
                <input type="button" value="OK" className="button small" onClick={(e) => {onAddMonths(e);}}/>
              </div>
            </div>  
          </form>
        );
      } 
      return '';
    }

    const renderButtonValue = () => {
      if(isAddingMonths){
        return "Скрыть";
      }
      return "+ Добавить период"
    }

    const buttonPushed = (e) => {
      e.preventDefault();
      dispatch(actions.addMonthsButtonPushed());
    }

    return (
      <div className="add-months-button-wrapper row">
        <div className="small-2 columns">
          <input type="button" className="button small " value={renderButtonValue()} onClick={(e) => {buttonPushed(e);}}/>
        </div>  
        <div className="small-7 end columns">  
          {inputFieldRender()}  
        </div>  
      </div>
    );
  }
}

export default 
  withRouter(connect((state) => {
      return { 
      isAddingMonths: state.commonAppState.isAddingMonths,
      sum: state.creditProps.sum,
      percents: state.creditProps.percents
    }
  })(AddMonthsButton));