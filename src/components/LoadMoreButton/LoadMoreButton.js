import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './LoadMoreButton.css';

class LoadMoreButton extends Component {

    render() {
        return (
            <Button
                fluid
                className="LoadMoreButton"
                onClick={this.props.click.bind(this)}
                loading={this.props.isLoading}>
                {this.props.children}
            </Button>
        );
    }

}

LoadMoreButton.propTypes = {
    isLoading: PropTypes.bool,
    click: PropTypes.func
};

export default LoadMoreButton;