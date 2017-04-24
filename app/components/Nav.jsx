import React from'react';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component{
  render () {
    return (
    	<div>
      		<h2>Nav Component</h2>
        	<IndexLink to="/" activeClassName="active">Потребительский кредит</IndexLink>
        	<Link to="/mortage" activeClassName="active">Ипотека</Link>
        	<Link to="/car" activeClassName="active">Автокредит</Link>
        	<Link to="/about" activeClassName="active">О проекте</Link>
      	</div>
    );
  }
};

export default Nav;
