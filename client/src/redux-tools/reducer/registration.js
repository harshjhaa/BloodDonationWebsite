import {
    REGISTRATION_FAIL, REGISTRATION_SUCCESS_RECIEVER, REGISTRATION_SUCCESS_DONOR, RECIEVER_LOADED,
    RECIEVER_LOADING_ERROR, DONOR_LOADING_ERROR, DONOR_LOADED
} from '../action/types';

const initialStateR = {
    isReciever: false,
    userDataReciever: null,
}

const initialStateD = {
    isDonor: false,
    userDataDonor: null,
}

export function recieverReducer(state = initialStateR, action) {
    const { type, payload } = action;
    switch (type) {
        case REGISTRATION_SUCCESS_RECIEVER: {
            return {
                ...state,
                ...payload,
                isReciever: true,
            }
        }
        case REGISTRATION_FAIL: {
            return {
                ...state,
                isReciever: false,
                userDataReciever: null
            }
        }
        case RECIEVER_LOADED: {
            return {
                ...state,
                isReciever: true,
                userDataReciever: payload
            }
        }
        case RECIEVER_LOADING_ERROR: {
            return {
                ...state,
                isReciever: false,
            }
        }
        default: return state;
    }
}

export function donorReducer(state = initialStateD, action) {
    const { type, payload } = action;
    switch (type) {
        case REGISTRATION_SUCCESS_DONOR: {
            return {
                ...state,
                ...payload,
                isDonor: true,
            }
        }
        case REGISTRATION_FAIL: {
            return {
                ...state,
                isDonor: false,
                userDataDonor: null
            }
        }
        case DONOR_LOADED: {
            return {
                ...state,
                isDonor: true,
                userDataDonor: payload
            }
        }
        case DONOR_LOADING_ERROR: {
            return {
                ...state,
                isDonor: false,
            }
        }
        default: return state;
    }
}