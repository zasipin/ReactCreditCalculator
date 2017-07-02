import React from 'react';
import {Link} from 'react-router';

var BackLink = (props) => {
    var {linkHistory} = props;
    
    var goBack = (e) => {
        e.preventDefault();
        linkHistory.goBack();
    }

    var backClass = props.backClass || 'float-left';
    var backText = '< Назад';

    return (
        <Link to="/" className={backClass} onClick={(e) => {goBack(e);}}>{backText}</Link>
    )
}

export default BackLink;