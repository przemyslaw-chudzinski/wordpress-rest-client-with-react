import * as actionTypes from './actionTypes';
import axios from "axios";


export const fetchPostsAction = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS,
        posts: posts
    };
};

export const fetchPosts = (perPage, offset) => {
    return dispatch => {
        return axios.get('http://localhost/wordpress-rest-api/wp-json/wp/v2/posts?per_page=' + perPage + '&offset=' + offset)
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


export const fetchNextPosts = (perPage, offset) => {
    return dispatch => {
        return axios.get('http://localhost/wordpress-rest-api/wp-json/wp/v2/posts?per_page=' + perPage + '&offset=' + offset)
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