import * as actionTypes from './actionTypes';
import axios from "axios";
import {endpoints} from "../../api/endpoints";


const {authEndpoints} = endpoints;

export const signInAction = user => ({
    type: actionTypes.AUTH_USER,
    user
});


export const signIn = credentials => dispatch => axios.post(authEndpoints.singIn(), credentials)
    .then(response => response.data)
    .then(user => user && dispatch(signInAction(user)))
    .then(user => localStorage.setItem('auth_user', JSON.stringify(user.user)));

export const logOut = () => {
    localStorage.removeItem('auth_user');
    return {
        type: actionTypes.AUTH_LOG_OUT
    };
};
