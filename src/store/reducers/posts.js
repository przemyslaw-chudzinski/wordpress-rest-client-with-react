import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: [],
};

const postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_POSTS:
            return {
                ...state,
                posts: action.posts
            };
        case actionTypes.FETCH_NEXT_POSTS:
            return {
                ...state,
                posts: state.posts.concat(action.posts)
            };
        case actionTypes.CLEAR_POSTS:
            return {
                ...state,
                posts: []
            };
        default:
            return state;
    }

};

export default postsReducer;