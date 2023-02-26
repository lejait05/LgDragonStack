import { USERACCOUNT_DRAGONS} from "./types";
import {fetchFromUserAccount} from "./userAccount";

export const fetchUserAccountDragons = ()=> fetchFromUserAccount({
    endpoint: 'dragons',
    options: {credentials: 'include'},
    FETCH_TYPE: USERACCOUNT_DRAGONS.FETCH,
    ERROR_TYPE: USERACCOUNT_DRAGONS.FETCH_ERROR,
    SUCCESS_TYPE: USERACCOUNT_DRAGONS.FETCH_SUCCESS
});
