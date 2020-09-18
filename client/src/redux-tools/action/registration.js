import axios from 'axios';
import { setAlert } from './alert'
import {
    REGISTRATION_SUCCESS_RECIEVER, REGISTRATION_SUCCESS_DONOR, REGISTRATION_FAIL, RECIEVER_LOADED,
    RECIEVER_LOADING_ERROR, DONOR_LOADING_ERROR, DONOR_LOADED
} from './types';

export const loadReciever = () => async dispatch => {
    try {
        const res = await axios.get('/api/reciever/current');
        dispatch({
            type: RECIEVER_LOADED,
            payload: res.data
        });
    } catch (error) {
        console.log("Error Occured: ", error);
        dispatch({
            type: RECIEVER_LOADING_ERROR
        });
    }
}

export const loadDonor = () => async dispatch => {
    try {
        const res = await axios.get('/api/donor/current');
        dispatch({
            type: DONOR_LOADED,
            payload: res.data
        });
    } catch (error) {
        console.log("Error Occured: ", error);
        dispatch({
            type: DONOR_LOADING_ERROR
        });
    }
}

export const registerReciever = ({ organizaionName, location }) => async dispatch => {
    console.log({ organizaionName, location })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ organizaionName, location });
    try {
        const res = await axios.post('/api/reciever', body, config);
        dispatch({
            type: REGISTRATION_SUCCESS_RECIEVER,
            payload: res.data
        });
        dispatch(setAlert("Success", 'success'));
        dispatch(loadReciever());
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTRATION_FAIL
        });
    }
}

export const registerDonor = ({ bloodGroup, alergy, age, location, gender }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ bloodGroup, alergy, age, location, gender });
    try {
        const res = await axios.post('/api/donor', body, config);
        dispatch({
            type: REGISTRATION_SUCCESS_DONOR,
            payload: res.data
        });
        dispatch(setAlert("Success", 'success'));
        dispatch(loadDonor());
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTRATION_FAIL
        });
    }
}