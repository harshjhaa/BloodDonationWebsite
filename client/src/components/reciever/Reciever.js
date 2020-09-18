import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerReciever } from '../../redux-tools/action/registration';
import './Reciever.css';

const Reciever = ({ registerReciever, isReciever }) => {

    const [formData, setFormData] = useState({
        organizaionName: '',
        location: '',
    });

    const { organizaionName, location } = formData;

    const handleRegisterEvent = (e) => {
        e.preventDefault();
        registerReciever({ organizaionName, location });
    }

    const handleChangeEvent = (e, fieldName) => {
        setFormData({ ...formData, [fieldName]: e.target.value })
    }

    if (isReciever) {
        return <Redirect to="/search-donor" />
    }

    return (
        <div className="donor-form-container">
            <div className="card-header" style={{ textAlign: 'center', fontSize: '22px', color: 'whitesmoke' }}>
                REGISTER AS RECIEVER
            </div>
            <br />
            <div className="card-body">
                <form onSubmit={e => { handleRegisterEvent(e) }}>
                    <div className="form-group">
                        <input placeholder="ORGANIZATION NAME" type="text" required className="form-control" onChange={e => handleChangeEvent(e, 'organizaionName')} />
                    </div>
                    <div className="form-group">
                        <input placeholder="LOCATION" required type="text" className="form-control" onChange={e => handleChangeEvent(e, 'location')} />
                    </div>
                    <br />
                    <button style={{ width: '100%' }} type="submit" className="btn btn-danger">Register</button>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => (
    {
        isReciever: state.recieverReducer.isReciever
    }
)

export default connect(mapStateToProps, { registerReciever })(Reciever);