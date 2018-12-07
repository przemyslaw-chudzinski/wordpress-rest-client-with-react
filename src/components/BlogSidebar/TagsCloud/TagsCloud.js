import React from 'react';
import PropTypes from 'prop-types';
import Tag from "../../Post/Tags/Tag/Tag";
import './TagsCloud.css';

export const TagsCloud = props => (
    <div className="TagsCloud">
        {props.header ? <h3>{props.header}</h3> : null}
        {props.tags && props.tags.length && props.tags.map(tag => <Tag key={tag.id} tag={tag}/>)}
    </div>
);

TagsCloud.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.object),
    header: PropTypes.string
};

export default TagsCloud;