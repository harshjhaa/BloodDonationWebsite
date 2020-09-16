import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { registerDonor, loadDonor } from '../../redux-tools/action/registration';
import './Donor.css';

const Donor = ({ registerDonor, loadDonor, isDonor }) => {

    useEffect(() => {
        loadDonor();
    }, []);

    const [formData, setFormData] = useState({
        bloodGroup: '',
        alergy: '',
        age: '',
        location: '',
        gender: ''
    });

    const { bloodGroup, alergy, age, location, gender } = formData;

    const handleRegisterEvent = (e) => {
        e.preventDefault();
        registerDonor({ bloodGroup, alergy, age, location, gender });
    }

    const handleChangeEvent = (e, fieldName) => {
        setFormData({ ...formData, [fieldName]: e.target.value })
    }

    const renderDonor = () => {
        if (!isDonor) {
            return (
                <div className=" donor-form-container">
                    <div className="card-header" style={{ textAlign: 'center', fontSize: '22px', color: 'whitesmoke' }}> REGISTER AS DONOR </div>
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
                                        < input required type="radio" value="male" onChange={e => handleChangeEvent(e, 'gender')} /> Male
                            </div>
                                </div>
                                <div className="col-7">
                                    <div className="male-female-text">
                                        < input required type="radio" value="female" onChange={e => handleChangeEvent(e, 'gender')} /> Female
                            </div>
                                </div>
                            </div>
                            <br />
                            <button style={{ width: '100%' }} type="submit" className="btn btn-danger">Register</button>
                        </form>
                    </div>
                </div>
            );
        } else {
            return (
                <h1 className="banner-title">Thanks for your support.You are already a registered as a 'Donor'.
            You will be contected if someone needs blood.</h1>
            );
        }
    }

    return (
        <Fragment>
            {renderDonor()}
        </Fragment>
    );
};

const mapStateToProps = (state) => (
    {
        isDonor: state.donorReducer.isDonor
    }
)

export default connect(mapStateToProps, { registerDonor, loadDonor })(Donor);