import { combineReducers } from "redux";
import signUpReducers from "./signUpReducers";

export default combineReducers({
    signup: signUpReducers
});