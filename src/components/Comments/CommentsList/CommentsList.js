import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CommentsList.css';
import {Comment} from "semantic-ui-react";

class CommentsList extends Component {

    render() {
        const {comments} = this.props;
        return comments && comments.length ? (
            <div className="CommentsList">
                {comments.map(comment => <Comment>
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
                </Comment>)}
            </div>
        ) : <p>Brak komentarzy</p>
    }
}

CommentsList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentsList;