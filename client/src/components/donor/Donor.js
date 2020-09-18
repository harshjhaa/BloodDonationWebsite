import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerDonor } from '../../redux-tools/action/registration';
import './Donor.css';

const Donor = ({ registerDonor, isDonor }) => {

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
                <div style={{ marginTop: 80 }} className="container jumbotron">
                    <h3>Thanks for your support. You are already a registered as a 'Donor'.
                    You will be contacted if someone needs blood.</h3>
                    <h4>Also ask your known ones to register for this good cause.</h4>
                    <br/>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Link className="btn btn-danger" to="/dashboard">Go To Dashboard</Link>
                    </div>
                </div>
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

export default connect(mapStateToProps, { registerDonor })(Donor);