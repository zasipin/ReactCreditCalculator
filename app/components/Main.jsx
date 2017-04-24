import React from'react';
import Nav from 'Nav';

var Main = (props) => {
  return (
    <div>
      <div>
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

