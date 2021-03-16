import axios from "axios";
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

export const loadLogin = (dispatch, getState) => {
    dispatch({ type: LOAD_LOGIN });
    
    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if(token) {
        config.headers["token"] = token;
    }

    axios
        .get("api/auth/user", config)
        .then(res => 
            dispatch({
                type: LOAD_LOGIN,
                payload: res.data
            })
            )
        .catch(err => console.log(err));


    const body = JSON.stringify({ name, email, password });


}