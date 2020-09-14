import axios from 'axios'

export const setAuthToken = (token) => {
    if (token) {
        //setting token to global header using the name "x-auth-token"
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        //when this will get called?
        console.log("Token is being deleted");
        delete axios.defaults.headers.common['x-auth-token'];
    }
}