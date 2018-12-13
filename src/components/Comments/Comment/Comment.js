import React from 'react';
import PropTypes from 'prop-types';
import {Comment} from "semantic-ui-react";

const SingleComment = props => (
    <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
        <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
                <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
        </Comment.Content>
    </Comment>
);

SingleComment.propTypes = {
    comment: PropTypes.any.required
};

export default SingleComment;