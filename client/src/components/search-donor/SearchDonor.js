import React, { useState, useRef, Fragment } from 'react';
import { connect } from 'react-redux'
import { searchForDonor } from '../../redux-tools/action/searchForDonor';
import './SearchDonor.css';

const SearchDonor = ({ searchForDonor, dataFound, donorData }) => {

    const [formData, setFormData] = useState({
        bloodGroup: '',
        alergy: '',
        location: '',
    });

    const [showDonorTable, setShowDonorTable] = useState(false);

    const bloodGroupField = useRef(null)
    const alergyField = useRef(null)
    const locationField = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        searchForDonor(formData);
        setShowDonorTable(true);
    }

    const handleChangeEvent = (e, fieldName) => {
        setFormData({ ...formData, [fieldName]: e.target.value })
    }

    const handleResetEvent = () => {
        bloodGroupField.current.value = null;
        alergyField.current.value = null;
        locationField.current.value = null;
        setShowDonorTable(false);
    }

    const renderSearchDonorForm = () => {
        return (
            <div className="card search-form-container">
                <div className="card-header" style={{ textAlign: 'center' }}> SEARCH FOR DONOR</div>
                <div className="card-body" >
                    <form className="from-to-date-content d-flex justify-content-around" onSubmit={e => handleSubmit(e)}>
                        <div className="form-inline">
                            <div className="form-group">
                                <input className="form-control" ref={bloodGroupField} type="text" placeholder="Blood Group" onChange={e => handleChangeEvent(e, 'bloodGroup')} required />
                            </div>
                        </div>
                        <div className="form-inline">
                            <div className="form-group">
                                <input className="form-control" ref={locationField} type="text" placeholder="Location" onChange={e => handleChangeEvent(e, 'location')} required />
                            </div>
                        </div>
                        <div className="form-inline">
                            <div className="form-group">
                                <input className="form-control" ref={alergyField} type="text" placeholder="Alergy" onChange={e => handleChangeEvent(e, 'alergy')} required />
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-danger btn-sm" type="submit">SEARCH</button>
                            <button className="btn btn-danger btn-sm" onClick={e => handleResetEvent()} style={{ marginLeft: "20px" }} type="button">RESET</button>
                        </div>
                    </form>
                </div >
            </div >
        );
    }

    const renderDonorDetailsInTable = () => {
        if (dataFound) {
            return donorData.map((donor) => {
                return (
                    <tr key={donor.user.email}>
                        <td>{donor.user.name}</td>
                        <td>{donor.bloodGroup}</td>
                        <td>{donor.alergy}</td>
                        <td>{donor.age}</td>
                        <td>{donor.gender}</td>
                        <td>{donor.user.contact}</td>
                        <td>{donor.user.email}</td>
                    </tr>
                )
            })
        } else {
            return (
                <div>
                    <p>No Data To Show</p>
                </div>
            );
        }
    }

    const renderDonorTable = () => {
        if (showDonorTable) {
            return (
                <div className="donor-details-table search-form-container">
                    <div className="card card-body">
                        <table className="table table-sm">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Blood Group</th>
                                    <th>Alergy</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Contact No.</th>
                                    <th>Email</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderDonorDetailsInTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            );
        }

    }

    return (
        <Fragment>
            {renderSearchDonorForm()}
            {renderDonorTable()}
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    dataFound: state.searchDonorReducer.dataFound,
    donorData: state.searchDonorReducer.donorData
})

export default connect(mapStateToProps, { searchForDonor })(SearchDonor);
