import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => {
    return (
        <Route {...rest} render={props => (!isAuthenticated && !loading) ? (<Redirect to="/login" />) : (<Component {...props} />)} />
    );
};

const mapStateToProps = (state) => ({
    auth: state.authReducer,
});

export default connect(mapStateToProps)(PrivateRoute);