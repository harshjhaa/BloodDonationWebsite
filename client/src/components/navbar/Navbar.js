import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = ({ history }) => {

    const authLinks = (
        <ul>
            <li><Link to="/home" className="nav-link-items">HOME</Link></li>
            <li><Link to="/about-us" className="nav-link-items">ABOUT US</Link></li>
            <li><Link to="/contact-us" className="nav-link-items">CONTACT US</Link></li>
            <li>
                <Link /* onClick={logout} */ href="#!">
                    <i className="fa fa-sign-out-alt"></i>
                    {' '}
                    <span className="hide-sm">Logout</span>
                </Link>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li><Link to="/home" className="nav-link-items">HOME</Link></li>
            <li><Link to="/about-us" className="nav-link-items">ABOUT US</Link></li>
            <li><Link to="/contact-us" className="nav-link-items">CONTACT US</Link></li>
            <li><Link to="/register" className="nav-link-items">REGISTER</Link></li>
            <li><Link to="/login" className="nav-link-items">LOGIN</Link></li>
        </ul>
    );

    return (
        <div className="nav-container">
            <div className="nav">
                <img className="nav-logo" src="./images/nav-logo.png" width="180" height="55" alt="logo" />
                {/* {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)} */}
                <div className="nav-links">
                    {guestLinks}
                </div>
            </div>
        </div>
    );
};

export default Navbar;