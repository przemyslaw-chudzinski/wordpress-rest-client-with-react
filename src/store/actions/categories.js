import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchCategoriesAction = (categories) => {
    return {
        type: actionTypes.FETCH_CATEGORIES,
        categories: categories
    };
};

export const fetchCategories = () => {
    return dispatch => {
        return axios.get('/categories')
            .then(response => response.data)
            .then(categories => {
                dispatch(fetchCategoriesAction(categories));
            });
    };
};