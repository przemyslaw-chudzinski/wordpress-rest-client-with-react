import React, {Component} from 'react';
import './Tag.css';
import PropTypes from 'prop-types';

class Tag extends Component {
    render() {
        const {tag} = this.props;
        return tag && <li className="ui purple tag label Tag">{tag.name}</li>;
    }
}

Tag.propTypes = {
    tag: PropTypes.object
};

export default Tag;