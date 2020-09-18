import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../redux-tools/action/auth';

const Login = ({ isAuthenticated, login }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const handleLoginEvent = (e) => {
        e.preventDefault();
        login({ email, password });
    }

    const handleChangeEvent = (e, fieldName) => {
        setFormData({ ...formData, [fieldName]: e.target.value })
    }

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <Fragment>
            <div className="card donor-form-container">
                <div className="card-header" style={{ textAlign: 'center' }}>LOGIN</div>
                <br />
                <div className="card-body">
                    <form onSubmit={e => { handleLoginEvent(e) }}>
                        <div style={{ marginTop: '-25px' }} className="form-group">
                            <input placeholder="Email" type="text" required className="form-control" onChange={e => handleChangeEvent(e, 'email')} />
                        </div>
                        <div className="form-group age-input">
                            <input placeholder="Password" type="text" min="18" required className="form-control" onChange={e => handleChangeEvent(e, 'password')} />
                        </div>
                        <button style={{ width: '100%' }} type="submit" className="btn btn-danger">LOGIN</button>
                        <br />
                        <p style={{ textAlign: 'center', marginBottom: '-11px' }}>Don't have an account? <Link to='/register'><span style={{ cursor: 'pointer', color: 'red' }}>Register Here</span></Link></p>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => (
    {
        isAuthenticated: state.authReducer.isAuthenticated
    }
);

export default connect(mapStateToProps, { login })(Login);