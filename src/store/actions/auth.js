import * as actionTypes from './actionTypes';
import AuthService from "../../api/authService";

export const signInAction = user => ({
    type: actionTypes.AUTH_USER,
    user
});

export const signIn = credentials => dispatch => AuthService.signIn(credentials)
    .then(user => user && dispatch(signInAction(user)))
    .then(user => localStorage.setItem('auth_user', JSON.stringify(user.user)));

export const logOut = () => {
    localStorage.removeItem('auth_user');
    return {
        type: actionTypes.AUTH_LOG_OUT
    };
};
