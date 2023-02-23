import {combineReducers} from 'redux';
import generation from './generation';
import dragon from './dragon';
import userAccount from './userAccount';



export default combineReducers({generation, dragon, userAccount});
