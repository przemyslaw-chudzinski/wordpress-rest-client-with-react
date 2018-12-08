import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Comments.css';
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import { Message } from 'semantic-ui-react'
import CommentsList from "./CommentsList/CommentsList";
import axios from 'axios';
import {endpoints} from "../../api/endpoints";

const {commentEndpoints} = endpoints;

class Comments extends Component {

    constructor() {
        super();
        this.state = {
            showCommentsList: false,
            comments: [],
            loading: false
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            showCommentsList: false,
            comments: [],
            loading: false
        });
    }

    handleClick() {
        this.setState({loading: true});
        this.loadComments()
            .then(() => this.setState({loading: false, showCommentsList: true}));
    }

    loadComments() {
        return axios.get(commentEndpoints.list(10, 0, this.props.postId))
            .then(response => {
                console.log(response);
            });
    }

    addComment(data = {}) {
        data = {
            post: this.props.postId,
            content: 'Ale fajny artykuł'
        };
        return axios.post(commentEndpoints.create(), data)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    handleSubmit() {

    }

    render() {
        const {disabled, postId} = this.props;
        const {showCommentsList, comments, loading} = this.state;
        const disabledMessage = <Message warning header='Dyskusja pod tym wpisem została wyłączona' content='Autor tego artykułu wyłączył możliwośc komentowania'/>;
        const showCommentsButton = <LoadMoreButton label="Zobacz dyskusję" click={this.handleClick.bind(this)} isLoading={loading}/>;
        return !disabled ?  (
            <div className="Comments">
                {showCommentsList ? <CommentsList comments={comments} /> : showCommentsButton}
                <button onClick={this.addComment.bind(this)}>Dodaj komentarz</button>
            </div>
        ) : disabledMessage;
    }
}

Comments.propTypes = {
    postId: PropTypes.number.required,
    disabled: PropTypes.bool
};

export default Comments;