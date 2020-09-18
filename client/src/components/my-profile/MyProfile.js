import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { registerReciever, registerDonor } from '../../redux-tools/action/registration';
import './MyProfile.css';

const MyProfile = ({ isReciever, userDataReciever, userDataDonor, registerReciever, registerDonor }) => {

    const [isEditableRecieverDisabled, setIsEditableRecieverDisabled] = useState(true);

    const [isEditableDonorDisabled, setIsEditableDonorDisabled] = useState(true);

    const [editDonorBtn, setEditDonorBtn] = useState(false);
    const [editRecieverBtn, setEditRecieverBtn] = useState(false);

    const [updateDonorBtn, setUpdateDonorBtn] = useState(true);
    const [updateRecieverBtn, setUpdateRecieverBtn] = useState(true);


    const [donorFormData, setDonorFormData] = useState({
        bloodGroup: '',
        alergy: '',
        age: '',
        location: '',
        gender: ''
    });

    const [recieverFormData, setRecieverFormData] = useState({
        organizaionName: '',
        location: '',
    });

    const handleUpdateProfileReciever = (e) => {
        e.preventDefault();
        registerReciever(recieverFormData);
        setEditRecieverBtn(!editRecieverBtn);
        setUpdateRecieverBtn(!updateRecieverBtn);
    }

    const handleUpdateProfileDonor = (e) => {
        e.preventDefault();
        registerDonor(donorFormData);
        setEditDonorBtn(!editDonorBtn);
        setUpdateDonorBtn(!updateDonorBtn);
    }

    const handleChangeEventReciever = (e, fieldName) => {
        setRecieverFormData({ ...recieverFormData, [fieldName]: e.target.value })
    }

    const handleChangeEventDonor = (e, fieldName) => {
        setDonorFormData({ ...donorFormData, [fieldName]: e.target.value })
    }

    const handleEditEvent = (e, dataOf) => {
        if (dataOf === 'reciever') {
            setIsEditableRecieverDisabled(!isEditableRecieverDisabled);
            setEditRecieverBtn(!editRecieverBtn);
            setUpdateRecieverBtn(!updateRecieverBtn);
        } else {
            setIsEditableDonorDisabled(!isEditableDonorDisabled);
            setEditDonorBtn(!editDonorBtn);
            setUpdateDonorBtn(!updateDonorBtn);
        }
    }

    const renderProfile = () => {
        if (isReciever) {
            if (userDataReciever !== null) {
                return (
                    <div className=" my-profile-form-container ">
                        <div className="card-body">
                            <form className="my-profile-form" onSubmit={e => handleUpdateProfileReciever(e)}>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Name</label>
                                    <div class="col-sm-9">
                                        <input disabled value={userDataReciever.user.name} type="text" className="form-control" /* onChange={e => handleChangeEventReciever(e, 'name')} */ />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Email Id</label>
                                    <div class="col-sm-9">
                                        <input disabled value={userDataReciever.user.email} type="text" className="form-control" /* onChange={e => handleChangeEventReciever(e, 'email')} */ />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Contact Number</label>
                                    <div class="col-sm-9">
                                        <input disabled value={userDataReciever.user.contact} type="text" className="form-control" /* onChange={e => handleChangeEventReciever(e, 'contact')} */ />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Organization</label>
                                    <div class="col-sm-9">
                                        <input disabled={isEditableRecieverDisabled} placeholder={userDataReciever.organizaionName} required type="text" className="form-control" onChange={e => handleChangeEventReciever(e, 'organizaionName')} />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Location</label>
                                    <div class="col-sm-9">
                                        <input disabled={isEditableRecieverDisabled} placeholder={userDataReciever.location} required type="text" className="form-control" onChange={e => handleChangeEventReciever(e, 'location')} />
                                    </div>
                                </div>
                                <br />
                                <div className="my-profile-buttons">
                                    <button style={{ width: '200px' }} disabled={editRecieverBtn} onClick={e => handleEditEvent(e, 'reciever')} className="btn btn-danger">Edit</button>
                                    <button style={{ width: '200px' }} disabled={updateRecieverBtn} type="submit" className="btn btn-danger">Update</button>
                                </div>
                            </form>
                        </div >
                    </div >
                );
            } else {
                return (<div>Problem in fetching data.</div>);
            }
        } else {
            if (userDataDonor !== null) {
                return (
                    <div className=" my-profile-form-container ">
                        <div className="card-body">
                            <form className="my-profile-form" onSubmit={e => handleUpdateProfileDonor(e)}>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Name</label>
                                    <div class="col-sm-9">
                                        <input disabled value={userDataDonor.user.name} type="text" className="form-control" /* onChange={e => handleChangeEventReciever(e, 'name')} */ />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Email Id</label>
                                    <div class="col-sm-9">
                                        <input disabled value={userDataDonor.user.email} type="text" className="form-control" /* onChange={e => handleChangeEventReciever(e, 'email')} */ />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Contact Number</label>
                                    <div class="col-sm-9">
                                        <input disabled value={userDataDonor.user.contact} type="text" className="form-control" /* onChange={e => handleChangeEventReciever(e, 'contact')} */ />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Location</label>
                                    <div class="col-sm-9">
                                        <input disabled={isEditableDonorDisabled} placeholder={userDataDonor.location} required type="text" className="form-control" onChange={e => handleChangeEventDonor(e, 'location')} />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Blood Group</label>
                                    <div class="col-sm-9">
                                        <input disabled={isEditableDonorDisabled} placeholder={userDataDonor.bloodGroup} required type="text" className="form-control" onChange={e => handleChangeEventDonor(e, 'bloodGroup')} />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Age</label>
                                    <div class="col-sm-9">
                                        <input disabled={isEditableDonorDisabled} placeholder={userDataDonor.age} required type="text" className="form-control" onChange={e => handleChangeEventDonor(e, 'age')} />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Gender</label>
                                    <div class="col-sm-9">
                                        <input disabled={isEditableDonorDisabled} placeholder={userDataDonor.gender} required type="text" className="form-control" onChange={e => handleChangeEventDonor(e, 'gender')} />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Alergy</label>
                                    <div class="col-sm-9">
                                        <input disabled={isEditableDonorDisabled} placeholder={userDataDonor.alergy} required type="text" className="form-control" onChange={e => handleChangeEventDonor(e, 'alergy')} />
                                    </div>
                                </div>
                                <br />
                                <div className="my-profile-buttons">
                                    <button style={{ width: '200px' }} disabled={editDonorBtn} onClick={e => handleEditEvent(e, 'donor')} className="btn btn-danger">Edit</button>
                                    <button style={{ width: '200px' }} disabled={updateDonorBtn} type="submit" className="btn btn-danger">Update</button>
                                </div>
                            </form>
                        </div >
                    </div >
                );
            } else {
                return (<div>Problem in fetching data.</div>);
            }
        }
    }

    return (
        <Fragment>
            {renderProfile()}
        </Fragment>
    );
};

const mapStateToProps = (state) => (
    {
        isReciever: state.recieverReducer.isReciever,
        userDataReciever: state.recieverReducer.userDataReciever,
        userDataDonor: state.donorReducer.userDataDonor,
    }
)

export default connect(mapStateToProps, { registerReciever, registerDonor })(MyProfile);