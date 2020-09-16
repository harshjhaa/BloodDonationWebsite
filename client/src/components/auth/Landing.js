import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Auth.css'

const Landing = ({ isAuthenticated }) => {

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    {/* <h1 className="x-large">FIND BLOOD ORG.</h1> */}
                    <p className="lead">
                        Login or create a profile and further register yourself as a 'Donor' or a 'Reciever'
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

const mapStateToProps = (state) => (
    {
        isAuthenticated: state.authReducer.isAuthenticated
    }
);

export default connect(mapStateToProps)(Landing);