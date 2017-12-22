import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false
};

const preloaderReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SHOW_PRELOADER:
            return {
                loading: true
            };
        case actionTypes.HIDE_PRELOADER:
            return {
                loading: false
            };
        default:
            return state;
    }

};

export default preloaderReducer;