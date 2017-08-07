import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from 'actions';

var AddMonthsButton = (props) => {
  
  var {isAddingMonths, dispatch} = props;

  const inputFieldRender = () => {
    if(isAddingMonths){
      return (
        <div>
          <label>
            Добавить период (в месяцах)
            <input type="number" name="monthsToAdd" aria-describedby="nameHelpText" />
          </label>
          {/*   <p id="nameHelpText">Введите количество месяцев.</p> */}
          <input type="button" value="OK" className="button small"/>

          {/* <button className="close-button" data-close aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button> */}

        </div>
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
    <div className="add-months-button-wrapper">
      <input type="button" className="button small" value={renderButtonValue()} onClick={(e) => {buttonPushed(e);}}/>
      {inputFieldRender()}      
    </div>
  );
}

export default 
  withRouter(connect((state) => {
      return { 
      isAddingMonths: state.commonAppState.isAddingMonths
    }
  })(AddMonthsButton));