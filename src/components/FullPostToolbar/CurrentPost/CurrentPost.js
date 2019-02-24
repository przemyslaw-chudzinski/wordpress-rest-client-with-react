import React from 'react';
import PropTypes from 'prop-types';
import './CurrentPost.css';

export const CurrentPost = ({postTitle}) => postTitle && postTitle.length ? (
    <div className="CurrentPost">
        <h4>Aktualnie czytasz: </h4>
        <div>{postTitle}</div>
    </div>
) : null;

CurrentPost.propTypes = {
    postTitle: PropTypes.string
};

export default CurrentPost;
