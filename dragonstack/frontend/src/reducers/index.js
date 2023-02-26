import {combineReducers} from 'redux';
import generation from './generation';
import dragon from './dragon';
import userAccount from './userAccount';
import userAccountDragons from "./userAccountDragons";


export default combineReducers({
    generation,
    dragon,
    userAccount,
    userAccountDragons});
