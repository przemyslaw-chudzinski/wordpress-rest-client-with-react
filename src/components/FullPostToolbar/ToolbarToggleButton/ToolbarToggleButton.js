import React from 'react';
import './ToolbarToggleButton.css';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';

export const ToolbarToggleButton = props => {
    const {clickHandler, open} = props;
    const closeButton = <Icon name="close" className="icon-btn"/>;
    const openButton = <Icon name="angle up" className="icon-btn"/>;

    return (
        <div className="ToolbarToggleButton" onClick={clickHandler.bind(this)}>
            {open ? closeButton : openButton }
        </div>
    );
};

ToolbarToggleButton.propTypes = {
    clickHandler: PropTypes.func,
    open: PropTypes.bool
};

export default ToolbarToggleButton;