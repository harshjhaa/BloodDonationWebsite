import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegisterEvent = () => {

    }

    const handleChangeEvent = () => {

    }

    return (
        <div className="card donor-form-container">
            <div className="card-header" style={{ textAlign: 'center' }}>
                REGISTER YOURSELF
        </div>
            <br />
            <div className="card-body">
                <form onSubmit={e => { handleRegisterEvent(e) }}>
                    <div style={{ marginTop: '-25px' }}className="form-group">
                        <input placeholder="Name" type="text" required className="form-control" onChange={e => handleChangeEvent(e, 'name')} />
                    </div>
                    <div className="form-group">
                        <input placeholder="Email" type="text" required className="form-control" onChange={e => handleChangeEvent(e, 'email')} />
                    </div>
                    <div className="form-group">
                        <input placeholder="Contact Number" required type="text" className="form-control" onChange={e => handleChangeEvent(e, 'contact')} />
                    </div>
                    <div className="form-group age-input">
                        <input placeholder="Password" type="number" min="18" required className="form-control" onChange={e => handleChangeEvent(e, 'password')} />
                    </div>
                    <div className="form-group age-input">
                        <input placeholder="Confirm Password" type="number" min="18" required className="form-control" onChange={e => handleChangeEvent(e, 'cpassword')} />
                    </div>
                    <button style={{ width: '100%' }} type="submit" className="btn btn-danger">REGISTER</button>
                    <br />
                    <p style={{ textAlign: 'center', marginBottom: '-11px' }}>Already have an account? <Link to='/login'><span style={{ cursor: 'pointer', color: 'red' }}>Login Here</span></Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;