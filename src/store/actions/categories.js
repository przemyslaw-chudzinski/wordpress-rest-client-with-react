import * as actionTypes from './actionTypes';
import axios from 'axios';
import {endpoints} from '../../api/endpoints';

const {categoryEndpoints} = endpoints;

export const fetchCategoriesAction = (categories) => {
    return {
        type: actionTypes.FETCH_CATEGORIES,
        categories
    };
};

export const fetchCategories = () => {
    return dispatch => axios.get(categoryEndpoints.list())
        .then(response => response.data)
        .then(categories => {
            dispatch(fetchCategoriesAction(categories));
        });
};