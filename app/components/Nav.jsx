import React from'react';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component{
  render () {
    return (
			<div className="row top-menu medium-12">
				
    		<div className="small-centered large-10 small-12 columns menu-centered">
      		<ul className="menu">
        		<li><IndexLink to="/" activeClassName="active">ПОТРЕБИТЕЛЬСКИЙ</IndexLink></li>
        		<li><Link to="/mortage" activeClassName="active">ИПОТЕКА</Link></li>
        		<li><Link to="/car" activeClassName="active">АВТОКРЕДИТ</Link></li>
        		<li><Link to="/about" activeClassName="active">О ПРОЕКТЕ</Link></li>
					</ul>
      	</div>			
				
			</div>
    );
  }
};

export default Nav;
