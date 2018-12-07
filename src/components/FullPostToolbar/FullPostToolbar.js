import React from 'react';
import './FullPostToolbar.css';
import PrevNextPost from "./PrevNextPost/PrevNextPost";
import PropTypes from 'prop-types';
import CurrentPost from "./CurrentPost/CurrentPost";
import ToolbarToggleButton from "./ToolbarToggleButton/ToolbarToggleButton";

export const FullPostToolbar = props => {
    const {show, goToPost, post, showFullPostToolbarButton} = props;
    let classes = show ? ['FullPostToolbar', 'FullPostToolbarOpen'] : ['FullPostToolbar', 'FullPostToolbarClosed'];
    return (
        <div className={classes.join(' ')}>
            <PrevNextPost goToPost={event => goToPost(event)} post={post.prev_post} direction="prev" />
            <CurrentPost postTitle={post.title.rendered}/>
            <PrevNextPost goToPost={event => goToPost(event)} direction="next" post={post.next_post} />
            <ToolbarToggleButton open={show} clickHandler={event => showFullPostToolbarButton(event)}/>
        </div>
    );
};

FullPostToolbar.propTypes = {
    post: PropTypes.object,
    goToPost: PropTypes.func,
    show: PropTypes.bool,
    showFullPostToolbarButton: PropTypes.func
};

export default FullPostToolbar;