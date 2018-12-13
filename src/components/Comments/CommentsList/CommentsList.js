import React from 'react';
import PropTypes from 'prop-types';
import './CommentsList.css';
import {Comment, Message} from "semantic-ui-react";
import SingleComment from "../Comment/Comment";

const CommentsList = ({comments}) => comments && comments.length ? (
    <div className="CommentsList">
        <Comment.Group>
            {comments.map(comment => <SingleComment key={comment.id} comment={comment} />)}
        </Comment.Group>
    </div>
) : <Message info header="There aren't any comments" content="Write as a first one" />;

CommentsList.propTypes = {
    comments: PropTypes.any
};

export default CommentsList;