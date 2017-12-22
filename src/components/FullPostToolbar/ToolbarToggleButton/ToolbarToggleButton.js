import React, {Component} from 'react';
import './ToolbarToggleButton.css';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';

class ToolbarToggleButton extends Component {

    render() {
        return (
            <div className="ToolbarToggleButton" onClick={this.props.clickHandler.bind(this)}>
                <Icon name="close" className="icon-btn"/>
            </div>
        );
    }

}

ToolbarToggleButton.propTypes = {
    clickHandler: PropTypes.func
};

export default ToolbarToggleButton;