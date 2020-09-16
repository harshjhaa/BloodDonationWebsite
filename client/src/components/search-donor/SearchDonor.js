import React from 'react';
import './SearchDonor.css'

const SearchDonor = () => {

    const handleSubmit = () => { }
    const handleChangeEvent = () => { }

    return (
        <div className="card search-form-container">
            <div className="card-header" style={{ textAlign: 'center' }}>
                SEARCH FOR DONOR
                </div>
            <div className="card-body" >
                <form className="from-to-date-content d-flex justify-content-around" onSubmit={e => handleSubmit(e)}>
                    <div className="form-inline">
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Blood Group" onChange={e => handleChangeEvent(e, 'bloodGroup')} required />
                        </div>
                    </div>
                    <div className="form-inline">
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Location" onChange={e => handleChangeEvent(e, 'bloodGroup')} required />
                        </div>
                    </div>
                    <div className="form-inline">
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Alergy" onChange={e => handleChangeEvent(e, 'alergy')} required />
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-danger btn-sm" type="submit" >SEARCH</button>
                        <button className="btn btn-danger btn-sm" style={{ marginLeft: "20px" }} type="button">RESET</button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default SearchDonor;

{/* <div className="card">
                <div className="card-header" style={{ textAlign: 'center' }}>
                    SEARCH FOR DONOR
                </div>
                <br />
                <div>
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="form-group" style={{ marginLeft: '10px', marginRight: '10px' }} >
                            <input placeholder="Blood Group" type="text" required className="form-control" onChange={e => handleChangeEvent(e, 'bloodGroup')} />
                        </div>
                        <div className="form-group" style={{ marginLeft: '10px', marginRight: '10px' }}>
                            <input placeholder="Location" required type="text" className="form-control" onChange={e => handleChangeEvent(e, 'location')} />
                        </div>
                        <div className="form-group" style={{ marginLeft: '10px', marginRight: '10px' }}>
                            <input placeholder="Alergy" required type="text" className="form-control" onChange={e => handleChangeEvent(e, 'alergy')} />
                        </div>
                        <br />
                        <button style={{ width: '95%', marginLeft: '20px', marginRight: '20px' }} type="submit" className="btn btn-danger">SEARCH</button>
                        <br />
                        <br />
                        <button style={{ width: '95%', marginRight: '20px', marginLeft: '20px' }} type="submit" className="btn btn-danger">RESET</button>
                        <br />
                        <br />
                    </form>
                </div>
            </div> */}