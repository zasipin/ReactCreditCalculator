import React from'react';
import Nav from 'Nav';
import MiddleBar from 'MiddleBar';
import {Route} from 'react-router-dom';

import ConsumerLoan from 'ConsumerLoan'; 
import Mortage from 'Mortage'; 
import CarLoan from 'CarLoan'; 


var Main = (props) => {
  return (
    <div className=" main">
      <div >
        <Nav />
        <MiddleBar />
        <div className="row small-12 columns">
          {props.children}

          <Route path="/consumer" component={ConsumerLoan} /> 
          <Route path="/car" component={CarLoan}/>
          <Route path="/mortage" component={Mortage}/>
        </div>
      </div>
    </div>
  );
}

export default Main;

