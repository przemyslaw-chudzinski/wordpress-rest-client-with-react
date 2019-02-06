import * as actionTypes from './actionTypes';
import CategoryService from "../../api/categoryService";

export const fetchCategoriesAction = (categories) => {
    return {
        type: actionTypes.FETCH_CATEGORIES,
        categories
    };
};

export const fetchCategories = () => dispatch => CategoryService.fetch()
    .then(categories => categories.length ? dispatch(fetchCategoriesAction(categories)) : dispatch([]));
