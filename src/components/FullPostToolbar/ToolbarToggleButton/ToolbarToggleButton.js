import React from 'react';
import './ToolbarToggleButton.css';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';
import {isCallable} from "../../../utils/utils";

export const ToolbarToggleButton = ({clickCallback, open}) => {
    const closeButton = <Icon name="close" className="icon-btn"/>;
    const openButton = <Icon name="angle up" className="icon-btn"/>;

    return (
        <div className="ToolbarToggleButton" onClick={event => isCallable(clickCallback) && clickCallback(event)}>
            {open ? closeButton : openButton }
        </div>
    );
};

ToolbarToggleButton.propTypes = {
    clickCallback: PropTypes.func,
    open: PropTypes.bool
};
