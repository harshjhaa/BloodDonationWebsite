import {
    SEARCHING_SUCCESS, SEARCHING_FAIL
} from '../action/types';

const initialState = {
    dataFound: false,
    donorData: null,
}

export const searchDonorReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SEARCHING_SUCCESS: {
            return {
                dataFound: true,
                donorData: payload
            }
        }
        case SEARCHING_FAIL: {
            return {
                dataFound: false,
                donorData: null
            }
        }
        default: return state;
    }
}
