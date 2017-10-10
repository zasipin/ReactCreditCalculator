import React from 'react';
import {Route, IndexRoute, BrowserRouter, Redirect} from 'react-router-dom';

import Main from 'Main';
import ConsumerLoan from 'ConsumerLoan'; 
// import Mortage from 'Mortage'; 
// import CarLoan from 'CarLoan'; 
// import About from 'About'; 
// import PaymentsTimetable from 'PaymentsTimetable';
// import AnnuitetLoanList from 'AnnuitetLoanList';

export default (
      <BrowserRouter>
            <div>
                  <Route path="/" component={Main} />
                  <Route path="/" render={() => <Redirect to="/consumer" component={ConsumerLoan} />} />
                  {/* <Route exact path="/" render={() => <Redirect to="/consumer" component={ConsumerLoan} />} /> */}
                  {/* <Route path="/car" component={CarLoan}/>
                  <Route path="/mortage" component={Mortage}/> */}
            </div>
      </BrowserRouter>


//   <Router history={hashHistory}>
//     <Route path="/" component={Main}>
//         <Route path="mortage" component={Mortage}>
//               <IndexRoute component={AnnuitetLoanList}/>
//               <Route path="payments" component={PaymentsTimetable}/>   
//         </Route>
//         <Route path="car" component={CarLoan}>
//               <IndexRoute component={AnnuitetLoanList}/>
//               <Route path="payments" component={PaymentsTimetable}/>   
//         </Route>           

//         {/*<Route path="about" component={About}/>*/}
                 
//         {/*<Route path="payments" component={PaymentsTimetable}/>*/}

//         <Route path="consumer" component={ConsumerLoan}>
//               <IndexRoute component={AnnuitetLoanList} />
//               <Route path="payments" component={PaymentsTimetable}/>                           
//         </Route>   

//     </Route>
//   </Router>
)