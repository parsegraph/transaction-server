import axios from "axios";

import { getErrors } from "./errorActions";
import { 
    GET_ACCOUNTS,
} from "./types";

import {tokenConfig} from './signUpActions';

export const getAllAccounts = () => (dispatch, getState) => {
    axios
        .get("api/account/", tokenConfig(getState))
        .then(res => 
            dispatch({
                type: GET_ACCOUNTS,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(getErrors(err.response.data, err.response.status));
        });
        
}