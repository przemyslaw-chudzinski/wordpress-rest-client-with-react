import * as actionTypes from './actionTypes';
import PageService from "../../api/pageService";

export const fetchPagesAction = (pages) => {
    return {
        type: actionTypes.FETCH_PAGES,
        pages
    };
};

export const fetchPages = () => dispatch => PageService.fetch()
    .then(pages => dispatch(fetchPagesAction(pages)));
