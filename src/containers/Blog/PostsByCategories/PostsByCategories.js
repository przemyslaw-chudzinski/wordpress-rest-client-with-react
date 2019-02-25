import React, {Component} from 'react';
import PostsList from '../../../components/Posts/PostsList';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
import LoadMoreButton from "../../../components/LoadMoreButton/LoadMoreButton";
import {calculateOffset} from "../../../utils/utils";
import './PostsByCategories.css';
import {CategoryHeader} from "../../../components/CategoryHeader/CategoryHeader";

class PostsByCategories extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            category: null,
            offset: 0,
            perPage: 12,
            isLoadingLoadMoreButton: false,
            pageNumber: 1
        };
    }

    componentWillReceiveProps(nextProps) {
        const {match, hidePreloader, hideBlogSidebar} = this.props;
        if (nextProps.match.params.id !== match.params.id) {
            this.props.clearPosts();
            this.loadCategory(nextProps.match.params.slug)
                .then(() => {
                    this.loadPosts(nextProps.match.params.id)
                        .then(() => {
                            hidePreloader();
                            hideBlogSidebar();
                        });
                });
        }
    }

    componentDidMount() {
        const {match, hidePreloader, hideBlogSidebar} = this.props;
        this.loadCategory(match.params.slug)
            .then(() => {
                this.loadPosts(match.params.id)
                    .then(() => {
                        hidePreloader();
                        hideBlogSidebar();
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
        const {perPage, offset} = this.state;
        const {fetchPosts} = this.props;
        return categoryId && categoryId !== "" ? fetchPosts(perPage, offset, categoryId) :  null;
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

        const {category, perPage} = this.state;
        const {posts} = this.props;

        return (
            <div className="PostsByCategories">
                {category ? (
                    <CategoryHeader title={category.name} description={category.description} />
                ) : null}
                {posts && posts.length ? <PostsList posts={posts}/> : <p>Brak wpisów do wyświetlenia</p>}
                {posts && posts.length >= perPage ? <LoadMoreButton label="Pokaż więcej" click={this.loadMore.bind(this)}/> : null}
            </div>
        );
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
        hideBlogSidebar: () => dispatch(actionCreators.hideBlogSidebar()),
        clearPosts: () => dispatch(actionCreators.clearPosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsByCategories);
