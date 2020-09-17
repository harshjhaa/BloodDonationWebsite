import axios from 'axios';
// import { setAlert } from './alert';
import { SEARCHING_SUCCESS, SEARCHING_FAIL } from './types';

export const searchForDonor = ({ bloodGroup, alergy, location }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ bloodGroup, alergy, location });
    try {
        const res = await axios.post('/api/donor/search', body, config);
        dispatch({ type: SEARCHING_SUCCESS, payload: res.data });
        // console.log(res.data)
    } catch (error) {
        console.log(error);
        dispatch({ type: SEARCHING_FAIL });
    }
}
