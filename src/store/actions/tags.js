import * as actionTypes from './actionTypes';
import axios from 'axios';
import {endpoints} from "../../api/endpoints";

const {tagEndpoints} = endpoints;

export const fetchTagsAction = (tags) => {
    return {
        type: actionTypes.FETCH_TAGS,
        tags
    };
};

export const fetchTags = () => {
    return dispatch => axios.get(tagEndpoints.list())
        .then(response => response.data)
        .then(tags => {
            dispatch(fetchTagsAction(tags));
        });
};