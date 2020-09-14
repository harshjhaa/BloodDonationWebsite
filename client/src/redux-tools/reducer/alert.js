import { SET_ALERT, REMOVE_ALERT } from '../action/types';

const initialState = [
    // {
    //     id: 1,
    //     msg: "Please Log-In",
    //     alertType: "success"
    // }
];

export function alertReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case SET_ALERT: {
            return [...state, payload];
        }
        case REMOVE_ALERT: {
            return state.filter(alert => alert.id !== payload.id);
        }
        default: return state
    }
}