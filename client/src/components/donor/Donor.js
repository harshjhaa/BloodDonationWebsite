import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Donor.css'

const Donor = () => {

    const handleRegisterEvent = () => {

    }

    const handleChangeEvent = () => {

    }

    return (
        <div className=" donor-form-container">
            <div className="card-header" style={{ textAlign: 'center', fontSize: '22px', color: 'whitesmoke' }}>
                REGISTER AS DONOR
            </div>
            <br />
            <div className="card-body">
                <form onSubmit={e => { handleRegisterEvent(e) }}>
                    <div className="form-group">
                        <input placeholder="BLOOD GROUP" type="text" required className="form-control" onChange={e => handleChangeEvent(e, 'bloodGroup')} />
                    </div>
                    <div className="form-group">
                        <input placeholder="ALERGIES" type="text" required className="form-control" onChange={e => handleChangeEvent(e, 'alergy')} />
                    </div>
                    <div className="form-group age-input">
                        <input placeholder="AGE" type="number" min="18" required className="form-control" onChange={e => handleChangeEvent(e, 'age')} />
                    </div>
                    <div className="form-group">
                        <input placeholder="LOCATION" required type="text" className="form-control" onChange={e => handleChangeEvent(e, 'location')} />
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <div className="male-female-text">
                                < input required type="radio" name="gender" value="male" onChange={e => handleChangeEvent(e, 'gender')} /> Male
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="male-female-text">
                                < input required type="radio" name="gender" value="female" onChange={e => handleChangeEvent(e, 'gender')} /> Female
                            </div>
                        </div>
                    </div>
                    <br />
                    <button style={{ width: '100%' }} type="submit" className="btn btn-danger">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Donor;