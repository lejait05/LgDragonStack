import {USERACCOUNT_DRAGONS} from "../actions/types";
import fetchStates from "./fetchStates";

const DEFAULT_USERACCOUNT_DRAGONS = {dragons: []};

const userAccountDragons = (state = DEFAULT_USERACCOUNT_DRAGONS, action) => {
    switch(action.type){
        case USERACCOUNT_DRAGONS.FETCH:
            return {...state, status: fetchStates.fetching};
        case USERACCOUNT_DRAGONS.FETCH_ERROR:
            return {...state, status: fetchStates.error, message: action.message};
        case USERACCOUNT_DRAGONS.FETCH_SUCCESS:
            return {...state, status: fetchStates.success, message: action.message, dragons: action.dragons};
        default:
            return state;
    }
}

export default userAccountDragons;
