import axios from "axios";

import { getErrors } from "./errorActions";
import { 
    SAVE_LOGIN,
    LOAD_LOGIN,
    CLEAR,
    GET_LOGIN_TOKEN,
    IS_LOGGED_IN,
    GET_USERNAME,
    GET_USER,
    CREATE_USER,
    USE_SIGNUP_FORM
} from "./types";

export const loadLogin = () => (dispatch, getState) => {
    axios
        .get("api/auth/user", tokenConfig(getState))
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

export const saveLogin = ({ username, email, password }) => dispatch => {
    
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const body = JSON.stringify({ username, email, password });

    axios
        .post("api/auth/register", body, config)
        .then(res => 
            dispatch({
                type:SAVE_LOGIN,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(getErrors(err.response.data, err.response.status));
        });
}

export const tokenConfig = getState => {

    const token = getState().signup.token;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if(token) {
        config.headers["token"] = token;
    }

    return config;
}

export const logout = () => {
    return {
        type: CLEAR
    };
};