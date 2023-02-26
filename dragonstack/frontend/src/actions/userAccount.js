import {USERACCOUNT} from './types';
import {BACKEND} from '../config';

export const fetchFromUserAccount = ({
                                         endpoint,
                                         options,
                                         FETCH_TYPE,
                                         ERROR_TYPE,
                                         SUCCESS_TYPE
                                     }) => dispatch => {
    dispatch({type: USERACCOUNT.FETCH});

    return fetch(`${BACKEND.ADDRESS}/useraccount/${endpoint}`, {
        options
    })
        .then(json => {
            if (json.type === 'error') {
                dispatch({type: ERROR_TYPE, message: json.message});
            } else {
                dispatch({type: SUCCESS_TYPE, ...json});
            }
        })
        .catch(error => dispatch({
            type: ERROR_TYPE,
            message: error.message
        }));
}

export const signup = ({username, password}) => fetchFromUserAccount({
    endpoint: 'signup',
    options: {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    },
    FETCH_TYPE: USERACCOUNT.FETCH,
    ERROR_TYPE: USERACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: USERACCOUNT.FETCH_SUCCESS
});


export const login = ({username, password}) => fetchFromUserAccount({
    endpoint: 'login',
    options: {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    },
    FETCH_TYPE: USERACCOUNT.FETCH,
    ERROR_TYPE: USERACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: USERACCOUNT.FETCH_SUCCESS
});


export const logout = () => fetchFromUserAccount({
    endpoint: 'logout',
    options: {credentials: 'include'},
    FETCH_TYPE: USERACCOUNT.FETCH,
    ERROR_TYPE: USERACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: USERACCOUNT.FETCH_LOGOUT_SUCCESS
});

export const fetchAuthenticated = () => fetchFromUserAccount({
    endpoint: 'authenticated',
    options: {credentials: 'include'},
    FETCH_TYPE: USERACCOUNT.FETCH,
    ERROR_TYPE: USERACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: USERACCOUNT.FETCH_AUTHENTICATED_SUCCESS
});
