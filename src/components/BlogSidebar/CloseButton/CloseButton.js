import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';
import './CloseButton.css';

export const CloseButton = props => <div className="CloseButton" onClick={props.closeSidebar.bind(this)}><Icon name="chevron left"/></div>;

CloseButton.propTypes = {
    closeSidebar: PropTypes.func
};

export default CloseButton;