import axios from "axios";

import { getErrors } from "./errorActions";
import { 
    SAVE_LOGIN,
    LOAD_LOGIN,
    GET_LOGIN_TOKEN,
    IS_LOGGED_IN,
    GET_USERNAME,
    GET_USER,
    CREATE_USER,
    USE_SIGNUP_FORM
} from "./types";

export const loadLogin = (user) => (dispatch, getState) => {
    
    const token = getState().signup.token;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if(token) {
        config.headers["token"] = token;
    }

    const body = JSON.stringify({ user, token });
    axios
        .get("api/auth/user", config)
        .then(res => 
            dispatch({
                type: LOAD_LOGIN,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(getErrors(err.response.data, err.response.status));
        });
        
}