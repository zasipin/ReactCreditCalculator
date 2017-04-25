import React from'react';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component{
  render () {
    return (
			<div className="row top-menu">
				
    		<div className="small-centered large-10 small-12 columns">
      		<ul className="menu menu-centered">
        		<li><IndexLink to="/" activeClassName="active">Потребительский кредит</IndexLink></li>
        		<li><Link to="/mortage" activeClassName="active">Ипотека</Link></li>
        		<li><Link to="/car" activeClassName="active">Автокредит</Link></li>
        		<li><Link to="/about" activeClassName="active">О проекте</Link></li>
					</ul>
      	</div>
				
				
			</div>
    );
  }
};

export default Nav;
