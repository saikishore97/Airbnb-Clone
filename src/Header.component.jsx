import React from 'react';
import './Header.styles.css';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <div className="header">

            <Link to='/'>
                <img src="https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg" className="header__icon" alt="airbnb-logo"/>
            </Link>
            
            <div className="header__center">
                <input type="text" placeholder="Search"/>
                <SearchIcon/>
            </div>

            <div className="header__right">
                <p>Become a Host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>


        </div>
    )
}

export default Header;
