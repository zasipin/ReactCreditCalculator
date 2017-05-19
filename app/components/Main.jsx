import React from'react';
import Nav from 'Nav';

var Main = (props) => {
  return (
    <div className="row">
      <div className="large-12">
        <Nav />
        <div>
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Main;

