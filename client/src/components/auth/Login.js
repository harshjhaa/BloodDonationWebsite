import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleRegisterEvent = () => {

    }

    const handleChangeEvent = () => {

    }

    return (
        <div className="card donor-form-container">
            <div className="card-header" style={{ textAlign: 'center' }}>
                LOGIN
            </div>
            <br />
            <div className="card-body">
                <form onSubmit={e => { handleRegisterEvent(e) }}>
                    <div style={{ marginTop: '-25px' }} className="form-group">
                        <input placeholder="Email" type="text" required className="form-control" onChange={e => handleChangeEvent(e, 'email')} />
                    </div>
                    <div className="form-group age-input">
                        <input placeholder="Password" type="number" min="18" required className="form-control" onChange={e => handleChangeEvent(e, 'password')} />
                    </div>
                    <button style={{ width: '100%' }} type="submit" className="btn btn-danger">LOGIN</button>
                    <br />
                    <p style={{ textAlign: 'center', marginBottom: '-11px' }}>Don't have an account? <Link to='/register'><span style={{ cursor: 'pointer', color: 'red' }}>Register Here</span></Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;