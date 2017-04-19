var React = require('react');
import {Link, IndexLink} from 'react-router';

var Nav = React.createClass({
  render: function () {
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
});

module.exports = Nav;
