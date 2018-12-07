import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tag from "../../Post/Tags/Tag/Tag";
import './TagsCloud.css';

class TagsCloud extends Component {

    render() {
        const {header, tags} = this.props;
        return (
            <div className="TagsCloud">
                {header ? <h3>{header}</h3> : null}
                {tags && tags.length && tags.map(tag => <Tag key={tag.id} tag={tag}/>)}
            </div>
        );
    }

}

TagsCloud.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.object),
    header: PropTypes.string
};

export default TagsCloud;