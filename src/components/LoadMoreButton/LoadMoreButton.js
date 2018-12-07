import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './LoadMoreButton.css';

class LoadMoreButton extends Component {

    render() {

        const { click, isLoading, label, disabled } = this.props;

        return (
            <Button
                fluid
                disabled={disabled}
                className="LoadMoreButton"
                onClick={click.bind(this)}
                loading={isLoading}>
                {label}
            </Button>
        );
    }

}

LoadMoreButton.propTypes = {
    isLoading: PropTypes.bool,
    click: PropTypes.func,
    label: PropTypes.string,
    disabled: PropTypes.bool
};

export default LoadMoreButton;