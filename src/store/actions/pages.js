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
        return axios.get('/pages')
            .then(response => response.data)
            .then(pages => {
                dispatch(fetchPagesAction(pages));
            });
    }
};