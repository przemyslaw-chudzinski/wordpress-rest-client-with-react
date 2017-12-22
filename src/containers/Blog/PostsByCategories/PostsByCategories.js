import React, {Component} from 'react';
import PostsList from '../../../components/Posts/PostsList';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
import LoadMoreButton from "../../../components/LoadMoreButton/LoadMoreButton";
import {calculateOffset} from "../../../utils/utils";


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

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.loadCategory(nextProps.match.params.slug)
                .then(() => {
                    this.loadPosts(nextProps.match.params.id)
                        .then(() => {
                            this.props.hidePreloader();
                            this.props.hideBlogSidebar();
                        });
                });
        }
    }

    componentDidMount() {
        this.loadCategory(this.props.match.params.slug)
            .then(() => {
                this.loadPosts(this.props.match.params.id)
                    .then(() => {
                        this.props.hidePreloader();
                        this.props.hideBlogSidebar();
                    });
            });
    }

    loadCategory(categorySlug = "") {
        this.props.showPreloader();
        if (categorySlug !== "" && categorySlug !== null && categorySlug !== undefined) {
            return axios.get('/categories?slug=' + categorySlug)
                .then(response => response.data[0])
                .then(category => this.setState({category: category}));
        }
    }

    loadPosts(categoryId = null) {
        if (categoryId && categoryId !== "" && categoryId !== undefined) {
            return this.props.fetchPosts(this.state.perPage, this.state.offset, categoryId);
        }
    }

    loadMore() {
        this.setState({
            isLoadingLoadMoreButton: true
        });
        const currentState = {...this.state};
        currentState.pageNumber++;
        currentState.offset = calculateOffset(currentState);
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