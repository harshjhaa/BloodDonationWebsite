import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux-tools/action/auth';
import './Navbar.css';

const Navbar = ({ history, logout, auth: { isAuthenticated, loading } }) => {

    const handleLogoutEvent = () => {
        logout();
        console.log("Logout clicked");
        history.push('/')
    }

    const authLinks = (
        <ul>
            <li><Link to="/dashboard" className="nav-link-items">HOME</Link></li>
            <li><Link to="/my-profile" className="nav-link-items">MY PROFILE</Link></li>
            <li><Link to="/about-us" className="nav-link-items">ABOUT US</Link></li>
            <li><Link to="/contact-us" className="nav-link-items">CONTACT US</Link></li>
            <li><Link to="/feedback" className="nav-link-items">FEEDBACK</Link></li>
            <li>
                <Link className="nav-link-items" onClick={e => handleLogoutEvent()} href="#!">
                    <span className="hide-sm">LOGOUT</span>
                </Link>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li><Link to="/dashboard" className="nav-link-items">HOME</Link></li>
            <li><Link to="/about-us" className="nav-link-items">ABOUT US</Link></li>
            <li><Link to="/contact-us" className="nav-link-items">CONTACT US</Link></li>
            <li><Link to="/login" className="nav-link-items">LOGIN</Link></li>
            <li><Link to="/register" className="nav-link-items">REGISTER</Link></li>
        </ul>
    );

    return (
        <nav className="nav-container">
            <div className="nav">
                <Link to="/dashboard">
                <img
                    style={{ cursor: 'pointer' }}
                    className="nav-logo"
                    src="./images/nav-logo.png"
                    width="180" height="55"
                    alt="logo"
                />
                </Link>
                
                <div className="nav-links">
                    {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
                </div>
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => (
    {
        auth: state.authReducer
    }
)

export default connect(mapStateToProps, { logout })(Navbar);