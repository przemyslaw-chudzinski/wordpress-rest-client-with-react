import * as actionTypes from './actionTypes';
import PostService from "../../api/postService";

export const fetchPostsAction = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS,
        posts
    };
};

export const fetchPosts = (perPage, offset, categoryId = null) => dispatch => PostService.fetch(perPage, offset, categoryId)
    .then(posts => posts.length ? dispatch(fetchPostsAction(posts)) : dispatch(fetchPostsAction([])));

export const fetchNextPostsAction = (posts) => {
    return {
        type: actionTypes.FETCH_NEXT_POSTS,
        posts
    };
};

export const fetchNextPosts = (perPage, offset, categoryId = null) => dispatch => PostService.fetch(perPage, offset, categoryId)
    .then(posts => posts.length && dispatch(fetchNextPostsAction(posts)));

export const clearPosts = () => {
    return {
        type: actionTypes.CLEAR_POSTS
    };
};
