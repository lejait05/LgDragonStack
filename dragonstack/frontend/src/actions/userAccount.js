import {USERACCOUNT}from './types';
import {BACKEND} from '../config';

 export const signup = ({username, password})=> dispatch =>{
    dispatch({type:USERACCOUNT.FETCH});

    return fetch(`${BACKEND.ADDRESS}/useraccount/signup`, {
        method: 'POST',
        body: JSON.stringify({username,password}),
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'})
        .then(json=>{
            if (json.type === 'error'){
                dispatch({type:USERACCOUNT.FETCH_ERROR, message: json.message});
            }else{
                dispatch({type: USERACCOUNT.FETCH_SUCCESS, ...json});
            }
        })
        .catch(error=>dispatch({
            type: USERACCOUNT.FETCH_ERROR,
            message: error.message}));
};
