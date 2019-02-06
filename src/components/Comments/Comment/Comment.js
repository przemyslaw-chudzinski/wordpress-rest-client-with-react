import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Comment} from "semantic-ui-react";
import AddCommentForm from "../AddCommentForm/AddCommentForm";
import CommentsList from "../CommentsList/CommentsList";
import {calculateOffset} from "../../../utils/utils";
import CommentService from "../../../api/commentService";

class SingleComment extends Component {
    constructor() {
        super();
        this.state = {
            childrenComments: [],
            showForm: false,
            perPage: 10,
            pageNumber: 1
        };
    }

    fetchChildren(offset, parentId) {
        this.setState({
            offset: 0,
            pageNumber: 1
        });
        this.props.postId && CommentService.fetch(this.props.postId, parentId)
            .then(comments => {
                const state = {...this.state};
                state.childrenComments = comments;
                this.setState(state);
            });
    }

    handleLoadMore() {
        if (!this.props.postId) return;
        const state = {...this.state};
        state.pageNumber++;
        const offset = calculateOffset(state);
        this.setState(state);
        CommentService.fetch(this.props.postId, this.props.parentId, offset)
            .then(comments => {
                const state = {...this.state};
                state.childrenComments = state.childrenComments.concat(comments);
                this.setState(state);
            });
    }

    showForm() {
        this.setState({showForm: true});
    }

    showChildren() {
        this.fetchChildren(this.state.offset, this.props.parentId);
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

                    {this.state.childrenComments && this.state.childrenComments.length ? <CommentsList postId={postId} user={user} comments={this.state.childrenComments} onLoadMore={this.handleLoadMore.bind(this)}/> : null}

                    <Comment.Actions>
                        {!this.state.showForm ? <Comment.Action onClick={this.showForm.bind(this)}>Reply</Comment.Action> : null}
                        {!this.state.childrenComments || !this.state.childrenComments.length ? <Comment.Action onClick={this.showChildren.bind(this)}>Show answers</Comment.Action> : null}
                        {this.state.showForm && <AddCommentForm user={user} postId={postId} parentId={comment.id} commentCreated={this.fetchChildren.bind(this, this.state.offset, comment.id)}/>}
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
