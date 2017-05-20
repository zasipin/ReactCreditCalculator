import React from'react';
import Nav from 'Nav';
import MiddleBar from 'MiddleBar';

var Main = (props) => {
  return (
    <div className=" main">
      <div >
        <Nav />
        <MiddleBar />
        <div className="row">
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Main;

