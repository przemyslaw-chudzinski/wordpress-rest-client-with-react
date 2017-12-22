import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isVisible: false
};

const blogSidebarReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SHOW_BLOG_SIDEBAR:
            return {
                isVisible: true
            };
        case actionTypes.HIDE_BLOG_SIDEBAR:
            return {
                isVisible: false
            };
        default:
            return state;
    }

};

export default blogSidebarReducer;