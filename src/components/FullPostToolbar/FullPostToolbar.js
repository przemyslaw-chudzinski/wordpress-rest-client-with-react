import React from 'react';
import './FullPostToolbar.css';
import PrevNextPost from "./PrevNextPost/PrevNextPost";
import PropTypes from 'prop-types';
import CurrentPost from "./CurrentPost/CurrentPost";
import {ToolbarToggleButton} from "./ToolbarToggleButton/ToolbarToggleButton";
import {isCallable} from "../../utils/utils";

export const FullPostToolbar = ({show, goToPost, post, showFullPostToolbarButton}) => {
    const classNamesArr = ['FullPostToolbar'];
    show ? classNamesArr.push('FullPostToolbarOpen') : classNamesArr.push('FullPostToolbarClosed');
    return (
        <div className={classNamesArr.join(' ')}>
            <PrevNextPost goToPost={event => isCallable(goToPost) && goToPost(event)} post={post && post.prev_post} direction="prev" />
            <CurrentPost postTitle={post && post.title && post.title.rendered}/>
            <PrevNextPost goToPost={event => isCallable(goToPost) && goToPost(event)} direction="next" post={post && post.next_post} />
            <ToolbarToggleButton open={show} clickCallback={event => isCallable(showFullPostToolbarButton) && showFullPostToolbarButton(event)}/>
        </div>
    );
};

FullPostToolbar.propTypes = {
    post: PropTypes.object,
    goToPost: PropTypes.func,
    show: PropTypes.bool,
    showFullPostToolbarButton: PropTypes.func
};
