import {USERACCOUNT_INFO} from "../actions/types";
import fetchStates from "./fetchStates";
const userAccountInfo = (state = {}, action) => {
    switch (action.type){
        case USERACCOUNT_INFO.FETCH:
            return {...state, status: fetchStates.fetching};
        case USERACCOUNT_INFO.FETCH_ERROR:
            return {...state, status: fetchStates.error, message: action.message};
        case USERACCOUNT_INFO.FETCH_SUCCESS:
            return {...state, status: fetchStates.success, message: action.message, ...action.info};
        default:
            return state;
    }
}
export default userAccountInfo;
