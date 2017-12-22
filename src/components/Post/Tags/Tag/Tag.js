import React, {Component} from 'react';
import './Tag.css';
import PropTypes from 'prop-types';

class Tag extends Component {

    render() {
        return (
            <li className="ui purple tag label Tag">{this.props.tag.name}</li>
        );
    }

}

Tag.propTypes = {
    tag: PropTypes.object
};

export default Tag;