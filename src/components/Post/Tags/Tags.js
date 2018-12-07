import React, {Component} from 'react';
import Tag from "./Tag/Tag";
import './Tags.css';
import PropTypes from 'prop-types';

class Tags extends Component {

    render() {
        const {tags} = this.props;
        return tags && tags.length && (
            <ul className="Tags">
                {tags.map(tag => <Tag tag={tag} key={tag.term_id} />)}
            </ul>
        );
    }

}

Tags.propTypes = {
    tags: PropTypes.array
};

export default Tags;