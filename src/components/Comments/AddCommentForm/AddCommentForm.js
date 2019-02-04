import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Button} from 'semantic-ui-react';
import axios from 'axios';
import './AddCommentForm.css';

class AddCommentForm extends Component {

    constructor() {
        super();
        this.state = {
            content: ''
        };
    }

    handleChange(key, event) {
        this.setState({[key]: event.target.value});
    }

    submit() {
        const {postId, user, parentId} = this.props;
        const data = {...this.state, post: postId, parent: parentId};
        axios.post('/comments', data, {
            headers: {
                Authorization: 'Bearer ' + user.token
            }
        })
            .then(response => this.success(response))
            .catch(err => this.error(err));
    }

    success(response) {
        this.setState({content: ''});
        this.props.commentCreated && this.props.commentCreated();
    }

    error(response) {

    }

    validate() {
        const {content} = this.state;
        return content && content.length > 0;
    }

    render() {
        return (
            <Form className="AddCommentForm">
                <Form.TextArea name="content" placeholder="Write a comment" value={this.state.content} onChange={this.handleChange.bind(this, 'content')} />
                <Button content='Dodaj komentarz' labelPosition='left' icon='edit' primary onClick={this.submit.bind(this)} disabled={!this.validate()} />
            </Form>
        );
    }

}

AddCommentForm.propTypes = {
    postId: PropTypes.number,
    user: PropTypes.object,
    commentCreated: PropTypes.func,
    parentId: PropTypes.number
};

export default AddCommentForm;
