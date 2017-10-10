import React from'react';
import Nav from 'Nav';
import MiddleBar from 'MiddleBar';
import {Route} from 'react-router-dom';
import Bundle from 'Bundle';

import loadMortage from 'bundle-loader?lazy!Mortage'

// components load their module for initial visit
// const Mortage = (props) => (
//   <Bundle load={loadMortage}>
//     {(Mortage) => <Mortage {...props}/>}
//   </Bundle>
// )

import ConsumerLoan from 'ConsumerLoan';  
// import Mortage from 'Mortage'; 
// import CarLoan from 'CarLoan'; 


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Mortage: () => {},
      CarLoan: () => {}
    }
  }

  componentWillMount() {
    import('Mortage').then(component => {
      this.setState({Mortage: component.default});
    });

    import('CarLoan').then(component => {
      this.setState({CarLoan: component.default});
    });
  }

  render() {
    let {CarLoan, Mortage} = this.state;

    return (
        <div className=" main">
          <div >
            <Nav />
            <MiddleBar />
            <div className="row small-12 columns">
              {this.props.children}

              <Route path="/consumer" component={ConsumerLoan} /> 
              <Route path="/car" component={CarLoan}/>
              <Route path="/mortage" component={Mortage}/>
            </div>
          </div>
        </div>
    );
  }
}

export default Main;

