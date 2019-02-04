import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Comment} from "semantic-ui-react";
import AddCommentForm from "../AddCommentForm/AddCommentForm";
import axios from 'axios';
import CommentsList from "../CommentsList/CommentsList";

class SingleComment extends Component {
    constructor() {
        super();
        this.state = {
            childrenComments: [],
            showForm: false
        };
    }

    fetchChildren() {
        axios.get('/comments?parent=' + this.props.parentId)
            .then(response => response.data)
            .then(data => this.setState({childrenComments: data}));
    }

    showForm() {
        this.setState({showForm: true});
    }

    showChildren() {
        this.fetchChildren();
    }

    render() {
        const {comment, postId, user} = this.props;
        return comment && (
            <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>{comment.author_name}</Comment.Author>
                    <Comment.Metadata>
                        <div>{comment.date}</div>
                    </Comment.Metadata>
                    <Comment.Text dangerouslySetInnerHTML={{__html: comment.content.rendered}} />

                    {this.state.childrenComments && this.state.childrenComments.length ? <CommentsList postId={postId} user={user} comments={this.state.childrenComments}/> : null}

                    <Comment.Actions>
                        <Comment.Action onClick={this.showForm.bind(this)}>Reply</Comment.Action>
                        {!this.state.childrenComments || !this.state.childrenComments.length ? <Comment.Action onClick={this.showChildren.bind(this)}>Show answers</Comment.Action> : null}
                        {this.state.showForm && <AddCommentForm user={user} postId={postId} parentId={comment.id} commentCreated={this.fetchChildren.bind(this)}/>}
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
        );
    }
}

SingleComment.propTypes = {
    comment: PropTypes.any,
    postId: PropTypes.number,
    user: PropTypes.object,
    parentId: PropTypes.number
};

export default SingleComment;
