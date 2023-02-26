import {fetchFromUserAccount} from './userAccount';
import{USERACCOUNT_INFO} from './types';

export const fetchUserAccountInfo = () =>  fetchFromUserAccount({
    endpoint: 'info',
    options: {credentials: 'include'},
    FETCH_TYPE: USERACCOUNT_INFO.FETCH,
    ERROR_TYPE: USERACCOUNT_INFO.FETCH_ERROR,
    SUCCESS_TYPE: USERACCOUNT_INFO.FETCH_SUCCESS
});
