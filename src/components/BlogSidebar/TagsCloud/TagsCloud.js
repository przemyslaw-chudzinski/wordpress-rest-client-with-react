import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tag from "../../Post/Tags/Tag/Tag";
import './TagsCloud.css';

class TagsCloud extends Component {

    render() {
        if (this.props.tags && this.props.tags.length) {
            return (
                <div className="TagsCloud">
                    <h3>{this.props.header}</h3>
                    {this.props.tags.map(tag => <Tag key={tag.id} tag={tag}/>)}
                </div>
            );
        }
        return null;
    }

}

TagsCloud.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.object),
    header: PropTypes.string
};

export default TagsCloud;