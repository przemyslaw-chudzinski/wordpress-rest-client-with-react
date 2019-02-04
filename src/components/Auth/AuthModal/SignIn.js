import React, {Component, Fragment} from 'react';
import { Button, Header, Icon, Modal, Form, Message } from 'semantic-ui-react';
import * as actionCreators from '../../../store/actions/index';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            showMessage: false
        };
    }

    validate() {
        const {username, password} = this.state;
        return username && password;
    }

    handleChange(key, event) {
        this.setState({[key]: event.target.value});
    }

    submit() {
        this.setState({showMessage: false});
        const data = {...this.state};
        this.props.singInUser(data)
            .catch(() => this.setState({showMessage: true}));
    }

    close() {
        this.props.handleClose && this.props.handleClose();
    }

    render() {
        return (
            <Fragment>
                <Header icon='archive' content='Sign In' />
                <Modal.Content>
                    {this.state.showMessage && (<Message negative>
                        <p>Wrong user name or password</p>
                    </Message>)}
                    <Form>
                        <Form.Field>
                            <label>User Name</label>
                            <input type="text" placeholder='User Name' onChange={this.handleChange.bind(this, 'username')} />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" placeholder='Password' onChange={this.handleChange.bind(this, 'password')} />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' onClick={this.close.bind(this)}>
                        <Icon name='remove' /> Cancel
                    </Button>
                    <Button color='green' onClick={this.submit.bind(this)} disabled={!this.validate()}>
                        <Icon name='checkmark' /> Sign In
                    </Button>
                </Modal.Actions>
            </Fragment>
        )
    }

}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
    return {
        singInUser: credentials => dispatch(actionCreators.signIn(credentials))
    };
};

SignIn.propTypes = {
    handleClose: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
