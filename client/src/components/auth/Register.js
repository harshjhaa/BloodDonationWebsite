import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { setAlert } from '../../redux-tools/action/alert';
import { register } from '../../redux-tools/action/auth';

const Register = ({ setAlert, register, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        contact: ''
    });

    const { name, email, contact, password, cpassword } = formData;

    const handleChangeEvent = (e, fieldName) => {
        setFormData({ ...formData, [fieldName]: e.target.value })
    }

    const handleRegisterEvent = async (e) => {
        e.preventDefault();
        if (password !== cpassword)
            setAlert("Password don't match", 'danger');
        else
            register({ name, email, password, contact });
    }

    //redirect if already logged-in
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <Fragment>
            <div className="card donor-form-container">
                <div className="card-header" style={{ textAlign: 'center' }}>
                    REGISTER YOURSELF
            </div>
                <br />
                <div className="card-body">
                    <form onSubmit={e => { handleRegisterEvent(e) }}>
                        <div style={{ marginTop: '-25px' }} className="form-group">
                            <input placeholder="Name" type="text" required className="form-control" onChange={e => handleChangeEvent(e, 'name')} />
                        </div>
                        <div className="form-group">
                            <input placeholder="Email" type="text" required className="form-control" onChange={e => handleChangeEvent(e, 'email')} />
                        </div>
                        <div className="form-group">
                            <input placeholder="Contact Number" required type="text" className="form-control" onChange={e => handleChangeEvent(e, 'contact')} />
                        </div>
                        <div className="form-group age-input">
                            <input placeholder="Password" type="text" required className="form-control" onChange={e => handleChangeEvent(e, 'password')} />
                        </div>
                        <div className="form-group age-input">
                            <input placeholder="Confirm Password" type="text" required className="form-control" onChange={e => handleChangeEvent(e, 'cpassword')} />
                        </div>
                        <button style={{ width: '100%' }} type="submit" className="btn btn-danger">REGISTER</button>
                        <br />
                        <p style={{ textAlign: 'center', marginBottom: '-11px' }}>Already have an account? <Link to='/login'><span style={{ cursor: 'pointer', color: 'red' }}>Login Here</span></Link></p>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);