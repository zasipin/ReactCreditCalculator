import React from 'react';
import {Link} from 'react-router-dom';

var BackLink = (props) => {
    var {linkHistory} = props;
    
    var goBack = (e) => {
        e.preventDefault();
        linkHistory.goBack();
    }

    var backClass = (props.backClass || 'float-left') + ' button small back-link';
    var backText = '< Назад';

    return (
        <Link to="/" className={backClass} onClick={(e) => {goBack(e);}}>{backText}</Link>
    )
}

export default BackLink;