import React from'react';
import {NavLink, IndexLink} from 'react-router-dom';

class Nav extends React.Component{
  render () {
    return (
			<div className="row top-menu medium-12">
				{/*<div className="title-bar" data-responsive-toggle="1top-animated-menu" data-hide-for="medium">
					<button className="menu-icon" type="button" data-toggle></button>
					<div className="title-bar-title">Menu</div>
				</div>*/}
				
				<div className="small-centered large-10 small-12 columns menu-centered ">
    		{/*<div className="small-centered large-10 small-12 columns menu-centered top-bar" id="1top-animated-menu" data-animate="hinge-in-from-top spin-out">*/}
				
  				{/*<div className="top-bar-center">*/}
						<ul className="menu vertical medium-horizontal">
							<li><NavLink to="/consumer" activeClassName="active">ПОТРЕБИТЕЛЬСКИЙ</NavLink></li>
							<li><NavLink to="/mortage" activeClassName="active">ИПОТЕКА</NavLink></li>
							<li><NavLink to="/car" activeClassName="active">АВТОКРЕДИТ</NavLink></li>
							{/*<li><Link to="/about" activeClassName="active">О ПРОЕКТЕ</Link></li>*/}
						</ul>
					{/*</div>	*/}
      	</div>			
				
			</div>
    );
  }
};

export default Nav;
