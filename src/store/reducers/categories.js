import * as actionTypes from '../actions/actionTypes';


const initialState = {
    categories: []
};

const categoriesReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_CATEGORIES:
            return {
                categories: action.categories
            };
        default:
            return state;
    }

};

export default categoriesReducer;