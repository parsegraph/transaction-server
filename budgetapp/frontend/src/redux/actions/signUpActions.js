import axios from "axios";

import { getErrors } from "./errorActions";
import { 
    SAVE_LOGIN,
    LOAD_LOGIN,
    CLEAR,
    LOGIN,
    GET_LOGIN_TOKEN,
    IS_LOGGED_IN,
    GET_USERNAME,
    GET_USER,
    CREATE_USER,
    USE_SIGNUP_FORM,
    HAS_USER_SESSION
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

export const login = ({ username, email, password }) => dispatch => {
    
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const body = JSON.stringify({ username, email, password });

    axios
        .post("api/auth/login", body, config)
        .then(res => 
            dispatch({
                type:LOGIN,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(getErrors(err.response.data, err.response.status));
        });
}

export const logout = () => (dispatch, getState) => {
    axios
        .post("api/auth/logout", null, tokenConfig(getState))
        .then((res) => {
            dispatch({ type: CLEAR });
        })
        .catch((err) => {
            dispatch(getErrors(err.response.data, err.response.status))
        });
};

export const tokenConfig = getState => {

    const token = getState().signup.token;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if(token) {
        config.headers["token"] = token;
        config.headers["Authorization"] = `Token ${token}`;
    }

    return config;
}


export const hasUserSession = () => {
    return {
        type: HAS_USER_SESSION 
    };
};
