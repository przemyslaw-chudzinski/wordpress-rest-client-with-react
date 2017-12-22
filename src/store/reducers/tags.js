import * as actionTypes from '../actions/actionTypes';


const initialState = {
    tags: []
};

const tagsReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_TAGS:
            return {
                tags: action.tags
            };
        default:
            return state;
    }

};

export default tagsReducer;