import * as actionTypes from './actionTypes';
import axios from "axios";


export const fetchPostsAction = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS,
        posts: posts
    };
};

export const fetchPosts = (perPage, offset, categoryId = null) => {
    return dispatch => {
        return axios.get('/posts?per_page=' + perPage + '&offset=' + offset + (categoryId ? '&categories=' + categoryId : ''))
            .then(response => response.data)
            .then(posts => {
                if (posts.length) {
                    dispatch(fetchPostsAction(posts));
                } else {
                    console.log('wywołać wyjątek albo błąd')
                }
            });
    };
};

export const fetchNextPostsAction = (posts) => {
    return {
        type: actionTypes.FETCH_NEXT_POSTS,
        posts: posts
    };
};


export const fetchNextPosts = (perPage, offset, categoryId = null) => {
    return dispatch => {
        return axios.get('/posts?per_page=' + perPage + '&offset=' + offset + (categoryId ? '&categories=' + categoryId : ''))
            .then(response => response.data)
            .then(posts => {
                if (posts.length) {
                    dispatch(fetchNextPostsAction(posts));
                } else {
                    console.log('wywołać wyjątek albo błąd !!!!!!!!!!!!!!!!!!')
                }
            });
    };
};

export const clearPosts = () => {
    return {
        type: actionTypes.CLEAR_POSTS
    };
};