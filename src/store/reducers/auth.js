import * as actionTypes from '../actions/actionTypes';

const getUserFromLs = () => {
    const userString = localStorage.getItem('auth_user');
    return userString ? JSON.parse(userString) : null;
};

const initialState = {
    user: getUserFromLs()
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_USER:
            return {
                ...state,
                user: action.user
            };
        case actionTypes.AUTH_LOG_OUT:
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
};

export default authReducer;
