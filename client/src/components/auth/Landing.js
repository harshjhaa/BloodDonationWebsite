import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css'

const Landing = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    {/* <h1 className="x-large">FIND BLOOD ORG.</h1> */}
                    <p className="lead">
                        Create a profile and further register yourself as a 'Donor' or a 'Reciever'
                        and get information related to blood availability.
                    </p>
                    <div className="login-signup-button">
                        <Link to="/login" className="btn btn-lg btn-danger">Login</Link>
                        <Link to="/register" className="btn btn-lg btn-danger">Register</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;