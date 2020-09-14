import React from 'react';
import './Reciever.css'

const Reciever = () => {


    const handleRegisterEvent = () => {

    }

    const handleChangeEvent = () => {

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

export default Reciever;