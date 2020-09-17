import { combineReducers } from 'redux';
import { alertReducer } from './alert';
import { authReducer } from './auth';
import { recieverReducer } from './registration';
import { donorReducer } from './registration';
import { searchDonorReducer } from './searchForDonor';

export default combineReducers({
    alertReducer,
    authReducer,
    recieverReducer,
    donorReducer,
    searchDonorReducer
});