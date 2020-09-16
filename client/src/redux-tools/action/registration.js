import axios from 'axios';
import { setAlert } from './alert'
import { REGISTRATION_SUCCESS, REGISTRATION_FAIL } from './types';

export const registerReciever = ({ organizaionName, location }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ organizaionName, location });
    try {
        const res = await axios.post('/api/reciever', body, config);
        // console.log(res.data);
        // console.log("----------------");
        // console.log(res.data.reciever);
        // console.log("----------------");
        // console.log(res.data.reciever.location);
        dispatch({
            type: REGISTRATION_SUCCESS,
            payload: res.data
        });
        dispatch(setAlert("Success", 'success'));
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

}