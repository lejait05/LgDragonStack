import {USERACCOUNT} from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_USERACCOUNT = {loggedIn: false};
 const userAccount = (state = DEFAULT_USERACCOUNT, action) => {
     switch(action.type){
         case USERACCOUNT.FETCH:
             return{...state, status: fetchStates.fetching};
         case USERACCOUNT.FETCH_ERROR:
             return{...state, status: fetchStates.error, message: action.message};
         case USERACCOUNT.FETCH_SUCCESS:
                return{...state, status: fetchStates.success, message: action.message, loggedIn: true};
         case USERACCOUNT.FETCH_LOGOUT_SUCCESS:
             return {...state, status: fetchStates.success, message: action.message, loggedIn: false};
         default:
     return state;
     }

 };

 export default userAccount;
