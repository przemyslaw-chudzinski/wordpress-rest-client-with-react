import * as actionTypes from './actionTypes';

export const showBlogSidebar = () => {
    return {
        type: actionTypes.SHOW_BLOG_SIDEBAR
    };
};

export const hideBlogSidebar = () => {
    return {
        type: actionTypes.HIDE_BLOG_SIDEBAR
    };
};