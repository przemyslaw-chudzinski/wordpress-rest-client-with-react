import * as actionTypes from './actionTypes';

export const showPreloader = () => {
    return {
        type: actionTypes.SHOW_PRELOADER
    };
};

export const hidePreloader = () => {
    return {
        type: actionTypes.HIDE_PRELOADER
    };
};