import React from 'react';
import PropTypes from 'prop-types';
import {Comment} from "semantic-ui-react";

const SingleComment = ({comment}) => comment && (
    <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
        <Comment.Content>
            <Comment.Author as='a'>{comment.author_name}</Comment.Author>
            <Comment.Metadata>
                <div>{comment.date}</div>
            </Comment.Metadata>
            <Comment.Text dangerouslySetInnerHTML={{__html: comment.content.rendered}} />
            <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
        </Comment.Content>
    </Comment>
);

SingleComment.propTypes = {
    comment: PropTypes.any
};

export default SingleComment;