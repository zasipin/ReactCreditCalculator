import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import ConsumerLoan from 'ConsumerLoan'; 
import Mortage from 'Mortage'; 
import CarLoan from 'CarLoan'; 
import About from 'About'; 

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="mortage" component={Mortage}/> 
        <Route path="car" component={CarLoan}/>         
        <Route path="about" component={About}/>         
        <IndexRoute component={ConsumerLoan}/> 
    </Route>
  </Router>
)