import React from 'react';
import PropTypes from 'prop-types';
import './PrevNext.css';
import {Icon} from 'semantic-ui-react';

export const PrevNextPost = props => {
    const {direction, post} = props;
    let arrow_left = <Icon name="chevron left" />;
    let arrow_right = <Icon name="chevron right" />;

    return post && post.slug && post.slug !== "" ? (
        <div className="PrevNext" onClick={event => props.goToPost(post.slug, event)}>
            <h4>{direction === 'prev' ? arrow_left : null}{post ? post.title : null} {direction === 'next' ? arrow_right : null}</h4>
        </div>
    ) : <div className="PrevNext" />;
}

PrevNextPost.propTypes = {
    post: PropTypes.object,
    direction: PropTypes.oneOf(['prev', 'next']),
    goToPost: PropTypes.func
};

export default PrevNextPost;