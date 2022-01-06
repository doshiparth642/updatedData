import { combineReducers } from "redux";
import users from './users';
import fetchReducer from './fetchReducer'


const Reducers = combineReducers({
    users,
    fetchReducer
});

export default Reducers;
