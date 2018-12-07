import React from 'react';
import {Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './LoadMoreButton.css';

export const LoadMoreButton = props => <Button
    fluid
    disabled={props.disabled}
    className="LoadMoreButton"
    onClick={event => props.click(event)}
    loading={props.isLoading}>
    {props.label}
</Button>;

LoadMoreButton.propTypes = {
    isLoading: PropTypes.bool,
    click: PropTypes.func,
    label: PropTypes.string,
    disabled: PropTypes.bool
};

export default LoadMoreButton;