import React, {Component} from 'react';
import PostsList from '../../../components/Posts/PostsList';
import LoadMoreButton from "../../../components/LoadMoreButton/LoadMoreButton";
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
import {calculateOffset} from "../../../utils/utils";

class Posts extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            offset: 0,
            perPage: 12,
            pageNumber: 1,
            isLoadingLoadMoreButton: false
        }
    }

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts() {
        this.props.showPreloader();
        this.props.fetchPosts(this.state.perPage, this.state.offset)
            .then(() => {
                this.props.hidePreloader();
                this.props.hideBlogSidebar();
            })
            .catch(() => {
                this.props.hidePreloader();
                this.props.hideBlogSidebar();
            });
    }

    loadMore() {
        this.setState({
            isLoadingLoadMoreButton: true
        });
        const currentState = {...this.state};
        currentState.pageNumber++;
        currentState.offset = calculateOffset(currentState);
        this.props.fetchNextPosts(currentState.perPage, currentState.offset)
            .then(() => {
                currentState.isLoadingLoadMoreButton = false;
                this.setState(currentState);
            });
    }

    render() {

        const {posts} = this.props;
        const {isLoadingLoadMoreButton, perPage} = this.state;

        return (
            <div className="Posts">
                <h1>Najnowsze wpisy</h1>
                <div className="Posts-list">
                    <PostsList posts={posts} />
                </div>
                {posts && posts.length && posts.length >= perPage ?
                    <LoadMoreButton
                    label="Pokaż więcej"
                    isLoading={isLoadingLoadMoreButton}
                    click={this.loadMore.bind(this)} /> : null}

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        loading: state.preloader.loading,
        posts: state.posts.posts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showPreloader: () => dispatch(actionCreators.showPreloader()),
        hidePreloader: () => dispatch(actionCreators.hidePreloader()),
        fetchPosts: (perPage, offset) => dispatch(actionCreators.fetchPosts(perPage, offset)),
        fetchNextPosts: (perPage, offset) => dispatch(actionCreators.fetchNextPosts(perPage, offset)),
        hideBlogSidebar: () => dispatch(actionCreators.hideBlogSidebar())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);