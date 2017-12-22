import React, {Component} from 'react';
import PostsList from '../../../components/Posts/PostsList';
import { Select } from 'semantic-ui-react';
import LoadMoreButton from "../../../components/LoadMoreButton/LoadMoreButton";
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
import {calculateOffset} from "../../../utils/utils";

const options = [
    {key: 1, text: '12', value: 12},
    {key: 2, text: '18', value: 18},
    {key: 3, text: '24', value: 24},
];

class Posts extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            offset: 0,
            perPage: options[0].value,
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
            .then(() => this.props.hidePreloader());
    }

    onChangePerPageHandler(e, select) {
        this.props.showPreloader();
        this.props.fetchPosts(select.value, this.state.offset)
            .then(() => {
                this.setState({perPage: select.value});
                this.props.hidePreloader();
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

        return (
            <div className="Posts">
                <h1>Latest posts</h1>
                <div>
                    <Select options={options} placeholder={this.state.perPage.toString()} onChange={this.onChangePerPageHandler.bind(this)} />
                </div>
                <div className="Posts-list">
                    <PostsList posts={this.props.posts} />
                </div>
                <LoadMoreButton
                    isLoading={this.state.isLoadingLoadMoreButton}
                    click={this.loadMore.bind(this)}>Pokaż więcej</LoadMoreButton>
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
        fetchNextPosts: (perPage, offset) => dispatch(actionCreators.fetchNextPosts(perPage, offset))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);