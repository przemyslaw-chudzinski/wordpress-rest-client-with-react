import * as actionTypes from './actionTypes';
import TagService from "../../api/tagService";

export const fetchTagsAction = (tags) => {
    return {
        type: actionTypes.FETCH_TAGS,
        tags
    };
};

export const fetchTags = () => dispatch => TagService.fetch()
    .then(tags => {
        dispatch(fetchTagsAction(tags));
    });
