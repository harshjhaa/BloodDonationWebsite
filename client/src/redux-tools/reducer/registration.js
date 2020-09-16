import { REGISTRATION_FAIL, REGISTRATION_SUCCESS } from '../action/types';

const initialState = {
    isRegistered: false,
    userRegistrationData: null,
}

export function recieverReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case REGISTRATION_SUCCESS: {
            return {
                ...state,
                isRegistered: true,
                userRegistrationData: payload
            }
        }
        case REGISTRATION_FAIL: {
            return {
                ...state,
                isRegistered: false,
                userRegistrationData: null
            }
        }
        default: return state;
    }
}