import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';
import './CloseButton.css';

class CloseButton extends Component {
    render() {
        return (
            <div className="CloseButton" onClick={this.props.closeSidebar}><Icon name="chevron left"/></div>
        )
    }
}

CloseButton.propTypes = {
    closeSidebar: PropTypes.func
};

export default CloseButton;