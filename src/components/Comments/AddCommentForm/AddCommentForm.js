import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Message} from 'semantic-ui-react';
import './AddCommentForm.css';
import CommentService from '../../../api/commentService';

class AddCommentForm extends Component {

    constructor() {
        super();
        this.state = {
            content: '',
            message: null
        };
    }

    handleChange(key, event) {
        this.setState({[key]: event.target.value});
    }

    submit() {
        const {postId, user, parentId} = this.props;
        const data = {...this.state, post: postId, parent: parentId};
        this.setState({message: null});
        CommentService.create(data, user.token)
            .then(response => this.success(response))
            .catch(err => this.error(err));
    }

    success(response) {
        this.setState({
            content: '',
            message: {
                type: 'success',
                content: 'Komentarz został opublikowany'
            }
        });
        this.props.commentCreated && this.props.commentCreated();
    }

    error(err) {
        this.setState({
            message: {
                content: err.response.data.message,
                type: 'error'
            }
        });
    }

    validate() {
        const {content} = this.state;
        return content && content.length > 0;
    }

    render() {
        return (
            <Form className="AddCommentForm">
                {this.state.message && this.state.message.type === 'error' && <Message negative content={this.state.message.content}/>}
                {this.state.message && this.state.message.type === 'success' && <Message positive content={this.state.message.content}/>}
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
