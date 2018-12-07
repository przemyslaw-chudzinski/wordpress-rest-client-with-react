import * as actionTypes from './actionTypes';
import axios from 'axios';
import {endpoints} from "../../api/endpoints";

const {pageEndpoints} = endpoints;

export const fetchPagesAction = (pages) => {
    return {
        type: actionTypes.FETCH_PAGES,
        pages
    };
};

export const fetchPages = () => {
    return dispatch => {
        return axios.get(pageEndpoints.list())
            .then(response => response.data)
            .then(pages => {
                dispatch(fetchPagesAction(pages));
            });
    }
};