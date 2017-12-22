import React, {Component} from 'react';
import Tag from "./Tag/Tag";
import './Tags.css';
import PropTypes from 'prop-types';

class Tags extends Component {

    render() {

        const tags = this.props.tags.map(tag => <Tag key={tag.term_id} tag={tag}/>);

        return (
            <ul className="Tags">
                {tags}
            </ul>
        );
    }

}

Tags.propTypes = {
    tags: PropTypes.array
};

export default Tags;