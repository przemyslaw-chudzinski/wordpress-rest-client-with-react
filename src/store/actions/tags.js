import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchTagsAction = (tags) => {
    return {
        type: actionTypes.FETCH_TAGS,
        tags: tags
    };
};

export const fetchTags = () => {
    return dispatch => {
        return axios.get('/tags')
            .then(response => response.data)
            .then(tags => {
                dispatch(fetchTagsAction(tags));
            });
    };
};