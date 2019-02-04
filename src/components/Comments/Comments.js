import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import './Comments.css';
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import { Message } from 'semantic-ui-react'
import CommentsList from "./CommentsList/CommentsList";
import axios from 'axios';
import {endpoints} from "../../api/endpoints";
import AddCommentForm from "./AddCommentForm/AddCommentForm";
import AuthModal from "../Auth/AuthModal/AuthModal";
import {connect} from "react-redux";

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
        nextProps.postId !== this.props.postId ? this.setState({
            showCommentsList: false,
            comments: [],
            loading: false
        }) : null;
    }

    handleClick() {
        this.setState({loading: true});
        this.loadComments();
    }

    loadComments() {
        return axios.get(commentEndpoints.list(10, 0, this.props.postId))
            .then(response => response.data)
            .then(comments => this.setState({loading: false, showCommentsList: true, comments}));
    }

    render() {
        const {disabled, userStore, postId} = this.props;
        const {showCommentsList, comments, loading} = this.state;
        const disabledMessage = <Message warning header='Dyskusja pod tym wpisem została wyłączona' content='Autor tego artykułu wyłączył możliwośc komentowania'/>;
        const showCommentsButton = <LoadMoreButton label="Zobacz dyskusję" click={this.handleClick.bind(this)} isLoading={loading}/>;
        return !disabled ?  (
            <div className="Comments">
                {showCommentsList ? (
                    <Fragment>
                        <CommentsList comments={comments} postId={postId} user={userStore.user} />
                        {userStore.user ? <AddCommentForm postId={postId} user={userStore.user} commentCreated={this.loadComments.bind(this)}/> : <AuthModal/>}
                    </Fragment>
                ) : showCommentsButton}
            </div>
        ) : disabledMessage;
    }
}

Comments.propTypes = {
    disabled: PropTypes.bool,
    postId: PropTypes.number
};

const mapStateToProps = state => ({
    userStore: state.user
});

export default connect(mapStateToProps, null)(Comments);
