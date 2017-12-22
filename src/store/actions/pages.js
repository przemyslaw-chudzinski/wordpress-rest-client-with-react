import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchPagesAction = (pages) => {
    return {
        type: actionTypes.FETCH_PAGES,
        pages: pages
    };
};

export const fetchPages = () => {
    return dispatch => {
        return axios.get('http://localhost/wordpress-rest-api/wp-json/wp/v2/pages')
            .then(response => response.data)
            .then(pages => {
                dispatch(fetchPagesAction(pages));
            });
    }
};