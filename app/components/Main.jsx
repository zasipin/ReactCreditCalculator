import React from'react';
import Nav from 'Nav';
import MiddleBar from 'MiddleBar';
import {Route} from 'react-router-dom';

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
    let {Mortage, CarLoan} = this.state;

    return (
        <div className=" main">
          <div >
            <Nav />
            <MiddleBar />
            <div className="row small-12 columns">
              {this.props.children}

              <Route path="/consumer" component={ConsumerLoan} /> 
              {/* {CarLoan} */}
              <Route path="/car" component={CarLoan}/>
              <Route path="/mortage" component={Mortage}/>
            </div>
          </div>
        </div>
    );
  }
}

export default Main;

