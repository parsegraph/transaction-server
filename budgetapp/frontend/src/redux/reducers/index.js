import { combineReducers } from "redux";
import signUpReducers from "./signUpReducers";
import errorReducers from "./errorReducers";

export default combineReducers({
    signup: signUpReducers,
    error: errorReducers
});