import React from 'react';
import PropTypes from 'prop-types';
import './CurrentPost.css';

export const CurrentPost = props => (
    <div className="CurrentPost">
        <h4>Aktualnie czytasz: </h4>
        <div>{props.postTitle}</div>
    </div>
);

CurrentPost.propTypes = {
    postTitle: PropTypes.string
};

export default CurrentPost;