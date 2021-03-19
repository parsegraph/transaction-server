import { combineReducers } from "redux";
import signUpReducers from "./signUpReducers";
import errorReducers from "./errorReducers";
import accountsReducers from './accountsReducer';

export default combineReducers({
    signup: signUpReducers,
    error: errorReducers,
    account: accountsReducers,
});