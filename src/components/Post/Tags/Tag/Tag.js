import React from 'react';
import './Tag.css';
import PropTypes from 'prop-types';

export const Tag = ({tag}) => tag && <li className="ui purple tag label Tag">{tag.name}</li>;

Tag.propTypes = {
    tag: PropTypes.object
};

export default Tag;