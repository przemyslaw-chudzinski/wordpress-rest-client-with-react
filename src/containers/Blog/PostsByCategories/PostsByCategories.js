import React, {Component} from 'react';
import PostsList from '../../../components/Posts/PostsList';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
import LoadMoreButton from "../../../components/LoadMoreButton/LoadMoreButton";


const config = {
    perPage: 12
};

class PostsByCategories extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            category: null,
            offset: 0,
            perPage: config.perPage,
            isLoadingLoadMoreButton: false,
            pageNumber: 1
        };
    }

    componentDidMount() {
        this.loadCategory()
            .then(() => {
                this.loadPosts()
                    .then(() => {
                        this.props.hidePreloader();
                        this.props.hideBlogSidebar();
                    });
            });
    }

    loadCategory() {
        this.props.showPreloader();
        if (this.props.match.params.slug) {
            return axios.get('/categories?slug=' + this.props.match.params.slug)
                .then(response => response.data[0])
                .then(category => this.setState({category: category}));
        }
    }

    loadPosts() {
        if (this.props.match.params.id) {
            return this.props.fetchPosts(this.state.perPage, this.state.offset, this.props.match.params.id)
        }
    }

    calculateOffset(currentState) {
        return (currentState.pageNumber - 1) * currentState.perPage;
    }

    loadMore() {
        this.setState({
            isLoadingLoadMoreButton: true
        });
        const currentState = {...this.state};
        currentState.pageNumber++;
        currentState.offset = this.calculateOffset(currentState);
        this.props.fetchNextPosts(currentState.perPage, currentState.offset, this.state.category.id)
            .then(() => {
                currentState.isLoadingLoadMoreButton = false;
                this.setState(currentState);
            });
    }

    render() {
        if (this.state.category && this.props.posts && this.props.posts.length) {
            return (
                <div>
                    <h1>Wpisy w kategorii: <strong>{this.state.category.name}</strong></h1>
                    <div>
                        <PostsList posts={this.props.posts}/>
                    </div>
                    {this.state.category.count > this.state.perPage ? <LoadMoreButton
                        isLoading={this.state.isLoadingLoadMoreButton}
                        click={this.loadMore.bind(this)}>Pokaż więcej</LoadMoreButton> : null}
                </div>
            );
        }
        return null;
    }

}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: (perPage, offset, categoryId) => dispatch(actionCreators.fetchPosts(perPage, offset, categoryId)),
        showPreloader: () => dispatch(actionCreators.showPreloader()),
        hidePreloader: () => dispatch(actionCreators.hidePreloader()),
        fetchNextPosts: (perPage, offset, categoryId) => dispatch(actionCreators.fetchNextPosts(perPage, offset, categoryId)),
        hideBlogSidebar: () => dispatch(actionCreators.hideBlogSidebar())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsByCategories);