import { 
    SAVE_LOGIN,
    LOAD_LOGIN,
    GET_LOGIN_TOKEN,
    IS_LOGGED_IN,
    GET_USERNAME,
    GET_USER,
    CREATE_USER,
    USE_SIGNUP_FORM   
} from "../actions/types";

const saveLogin = (login)=>{
    localStorage.setItem('login', JSON.stringify(login));
}

const loadLogin = ()=>{
    try {
        const login = localStorage.getItem('login');
        if (login) {
            return JSON.parse(login);
        }
    }
    catch(ex) {
        console.log("Error occurred while loading login");
        console.log(ex);
        try {
            localStorage.removeItem("login");
        }
        catch (ex) {
            console.log("Error occurred while trying to clear invalid login");
            console.log(ex);
        }
    }
    return {user:null, token:null};
}

const initialState = loadLogin();

export default function(state = initialState, action) {
    switch (action.type) {
        case SAVE_LOGIN:
            saveLogin(action.payload);
            return { ...state, ...action.payload }
        case LOAD_LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case GET_LOGIN_TOKEN:
        case IS_LOGGED_IN:
        case GET_USERNAME:
        case GET_USER:
        case CREATE_USER:
        default:
            return state;
    }
}