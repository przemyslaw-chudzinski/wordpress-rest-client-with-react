import React, {Component} from 'react';
import axios from 'axios';
import './FullPost.css';
import About from "../../../components/Post/About/About";
import Categories from "../../../components/Post/Categories/Categories";
import FullPostToolbar from "../../../components/FullPostToolbar/FullPostToolbar";
import Tags from "../../../components/Post/Tags/Tags";
import {connect} from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
import Image from "../../../components/Image/Image";
import {goToTopPage, parseDate} from "../../../utils/utils";
import {endpoints} from "../../../api/endpoints";
import Comments from "../../../components/Comments/Comments";

const {postEndpoints} = endpoints;

class FullPost extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            post: null,
            showFullPostToolbar: true
        };
    }

    componentDidUpdate() {
        const {post} = this.state;
        const {match} = this.props;
        post && post.slug && post.slug !== match.params.slug && this.loadPost(this.props.match.params.slug).then(() => goToTopPage());
    }

    showFullPostToolbarHandler() {
        this.setState(prevState => ({showFullPostToolbar: !prevState.showFullPostToolbar}));
    }

    goToPostHandler(postSlug = null) {
        postSlug && postSlug !== '' && this.props.history.push({pathname: '/post/' + postSlug});
    }

    componentDidMount() {
        this.loadPost(this.props.match.params.slug);
    }

    loadPost(postSlug = null) {
        this.props.showPreloader();
        return postSlug && postSlug !== '' ? axios.get(postEndpoints.single(postSlug))
            .then(response => response.data[0])
            .then(post => {
                this.setState({post: post});
                this.props.hidePreloader();
            }) : null;
    }

    render() {
        const {post, showFullPostToolbar} = this.state;
        let fullImage = null;

        post && post.thumbnail && post.thumbnail.full ? (fullImage =  <Image source={post.thumbnail.full} alt={post.thumbnail.alt}/>) : null;

        return post && (
            <div className="FullPostContent">
                {/* Thumbnail */}
                <div className="PostThumbnail">
                    {fullImage}
                </div>
                {/* Post title */}
                <h1>{post.title.rendered}</h1>
                {/* Post meta data */}
                <div className="post-info">
                    {post.post_date ? <span>Opublikowano: {parseDate(post.date)}</span> : null}
                    {post.post_author ? <strong>Autor: {post.post_author.name}</strong> : null}
                    {post.categories.length ? <span>Kategorie: <Categories categories={post.categories} /></span> : null}
                    {post.tags ? <Tags tags={post.tags} /> : null}
                </div>
                <div className="ui divider" />
                {/* Post content */}
                <div className="content" dangerouslySetInnerHTML={{__html:post.content.rendered}} />
                {/* Comments */}
                <Comments postId={post.id} disabled={!post.comments.allow}/>
                {/* About author */}
                <About author={post.post_author}/>
                {/* Toolbar on the bottom of the page */}
                <FullPostToolbar
                    showFullPostToolbarButton={this.showFullPostToolbarHandler.bind(this)}
                    show={showFullPostToolbar}
                    goToPost={this.goToPostHandler.bind(this)}
                    post={post}/>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        hidePreloader: () => dispatch(actionCreators.hidePreloader()),
        showPreloader: () => dispatch(actionCreators.showPreloader())
    };
};

export default connect(null, mapDispatchToProps)(FullPost);