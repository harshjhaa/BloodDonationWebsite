import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType, timeout = 1500) => dispatch => {
    let currentdate = new Date();
    let id = (currentdate.getDate()).toString()
        + (currentdate.getMonth() + 1).toString()
        + (currentdate.getFullYear()).toString()
        + (currentdate.getHours()).toString()
        + (currentdate.getMinutes()).toString()
        + (currentdate.getSeconds()).toString()
        + (currentdate.getMilliseconds()).toString()

    dispatch(
        {
            type: SET_ALERT,
            payload: { msg, alertType, id }
        }
    );

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: { id } }), timeout);
};

/*
{
type: 'REMOVE_ALERT',
payload:{msg:"This is 2 alert", alertType:"InitialAlert", id:1212}
}
*/