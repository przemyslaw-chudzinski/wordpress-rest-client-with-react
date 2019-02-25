import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import './Comments.css';
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import { Message } from 'semantic-ui-react'
import CommentsList from "./CommentsList/CommentsList";
import AddCommentForm from "./AddCommentForm/AddCommentForm";
import AuthModal from "../Auth/AuthModal/AuthModal";
import {connect} from "react-redux";
import {calculateOffset} from '../../utils/utils';
import CommentService from '../../api/commentService';

export class Comments extends Component {

    constructor() {
        super();
        this.state = {
            showCommentsList: false,
            comments: [],
            loading: false,
            perPage: 10,
            pageNumber: 1
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
        this.setState({
            offset: 0,
            pageNumber: 1
        });
        this.props.postId && CommentService.fetch(this.props.postId)
            .then(comments => {
                const state = {...this.state};
                state.loading = false;
                state.showCommentsList = true;
                state.comments = comments;
                this.setState(state);
            });
    }

    handleLoadMore() {
        const state = {...this.state};
        state.pageNumber++;
        const offset = calculateOffset(state);
        this.setState(state);
        CommentService.fetch(this.props.postId, 0, offset, state.perPage)
            .then(comments => {
                const state = {...this.state};
                state.comments = state.comments.concat(comments);
                this.setState(state);
            });
    }

    render() {
        const {disabled, userStore, postId} = this.props;
        const {showCommentsList, comments, loading} = this.state;
        const disabledMessage = <Message warning header='Dyskusja pod tym wpisem została wyłączona' content='Autor tego artykułu wyłączył możliwośc komentowania'/>;
        const showCommentsButton = <LoadMoreButton label="Show discussion" click={this.handleClick.bind(this)} isLoading={loading}/>;
        return !disabled ?  (
            <div className="Comments">
                {showCommentsList ? (
                    <Fragment>
                        <CommentsList comments={comments} postId={postId} user={userStore.user} onLoadMore={this.handleLoadMore.bind(this)} />
                        {userStore.user ? <AddCommentForm postId={postId} user={userStore.user} commentCreated={this.loadComments.bind(this)}/> : <AuthModal/>}
                    </Fragment>
                ) : showCommentsButton}
            </div>
        ) : disabledMessage;
    }
}

Comments.propTypes = {
    disabled: PropTypes.bool,
    postId: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    userStore: state.user
});

export default connect(mapStateToProps, null)(Comments);
