import axios from 'axios';
import { setAlert } from './alert';
import { setAuthToken } from '../../utils/setAuthToken';
import { loadReciever, loadDonor } from './registration';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTRATION_FAIL } from './types';

//LOAD USER
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }
    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (error) {
        console.log("Error Occured: ", error);
        dispatch({
            type: AUTH_ERROR
        });
    }
}

//REGISTER USER
export const register = ({ name, email, password, contact }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ name, email, password, contact });
    try {
        const res = await axios.post('/api/users', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        // dispatch(setAlert("Success", 'success'));
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAIL
        });
    }
}

//Login USER
export const login = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ email, password });
    // try {
    //     const res = await axios.post('/api/auth', body, config);
    //     dispatch({
    //         type: LOGIN_SUCCESS,
    //         payload: res.data
    //     });
    //     dispatch(setAlert("Success", 'success'));
    //     dispatch(loadUser());
    // } catch (err) {
    //     const errors = err.response.data.errors;
    //     if (errors) {
    //         errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    //     }
    //     dispatch({
    //         type: LOGIN_FAIL
    //     });
    // }
    //-------------------------------------OR-------------------------------------------//
    await axios.post('/api/auth', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            // dispatch(setAlert("Success", 'success'));
            dispatch(loadUser());
            dispatch(loadReciever());
            dispatch(loadDonor());
        })
        .catch((err) => {
            // const errors = err.response.data.errors;
            // if (errors) {
            //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
            // }
            dispatch({
                type: LOGIN_FAIL
            });
        })
}

//logout / clear-profile
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })
    dispatch({ type: REGISTRATION_FAIL })
}