import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import ConsumerLoan from 'ConsumerLoan'; 
import Mortage from 'Mortage'; 
import CarLoan from 'CarLoan'; 
import About from 'About'; 
import PaymentsTimetable from 'PaymentsTimetable';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="mortage" component={Mortage}/> 
        <Route path="car" component={CarLoan}/>         
        <Route path="about" component={About}/>
        <Route path="payments" component={PaymentsTimetable}/>         
        
        <IndexRoute component={ConsumerLoan}>
          
        </IndexRoute>   
    </Route>
  </Router>
)