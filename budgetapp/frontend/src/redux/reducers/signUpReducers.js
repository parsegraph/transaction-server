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
} from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    user: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOAD_LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case SAVE_LOGIN:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload
            }
        case CLEAR:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                user: null
            };
        case GET_LOGIN_TOKEN:
        case IS_LOGGED_IN:
        case GET_USERNAME:
        case GET_USER:
        case CREATE_USER:
        default:
            return state;
    }
}