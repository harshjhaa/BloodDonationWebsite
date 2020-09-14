import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../action/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
};

export function authReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case REGISTER_SUCCESS: {
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        }
        case REGISTER_FAIL: {
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        }
        case USER_LOADED: {
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            };
        }
        case AUTH_ERROR: {
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        }
        case LOGIN_SUCCESS: {
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        }
        case LOGIN_FAIL: {
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        }
        case LOGOUT: {
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        }
        default: return state;
    }
}