import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pages: []
};

const pagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PAGES:
            return {
                pages: action.pages
            };
        default:
            return state;
    }
};


export default pagesReducer;