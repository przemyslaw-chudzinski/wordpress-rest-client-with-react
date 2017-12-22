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

class FullPost extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            post: null,
            showFullPostToolbar: true
        };
    }

    componentDidUpdate() {
        if (this.state.post && this.state.post.slug && this.state.post.slug !== this.props.match.params.slug){
            this.loadPost(this.props.match.params.slug)
                .then(() => goToTopPage());
        }
    }

    showFullPostToolbarHandler() {
        this.setState(prevState => {
            return {
                showFullPostToolbar: !prevState.showFullPostToolbar
            };
        });
    }

    goToPostHandler(postSlug = "") {
        if (postSlug !== "") {
            this.props.history.push({pathname: '/post/' + postSlug});
        }
    }

    componentDidMount() {
        this.loadPost(this.props.match.params.slug);
    }

    loadPost(postSlug = "") {
        this.props.showPreloader();
        if (postSlug !== "") {
            return axios.get('/posts?slug=' + postSlug)
                .then(response => response.data[0])
                .then(post => {
                    this.setState({post: post});
                    this.props.hidePreloader();
                });
        }
    }

    render() {

        if (this.state.post) {
            let fullImage = null;
            if (this.state.post.thumbnail && this.state.post.thumbnail.full) {
                fullImage = <Image
                    source={this.state.post.thumbnail.full}
                    alt={this.state.post.thumbnail.alt}/>;
            }
            return (
                <div className="FullPostContent">
                    <div className="PostThumbnail">
                        {fullImage}
                    </div>
                    <h1>{this.state.post.title.rendered}</h1>
                    <div className="post-info">
                        <span>Opublikowano: {parseDate(this.state.post.date)}</span>
                        <strong>Autor: {this.state.post.post_author.name}</strong>
                        {this.state.post.categories.length ? <span>Kategorie: <Categories categories={this.state.post.categories} /></span> : null}
                        {this.state.post.tags ? <Tags tags={this.state.post.tags} /> : null}
                    </div>
                    <div className="ui divider" />
                    <div className="content"
                         dangerouslySetInnerHTML={{__html:this.state.post.content.rendered}} />
                    <About
                        description={this.state.post.post_author.description}
                        author={this.state.post.post_author.name}/>
                    <FullPostToolbar
                        showFullPostToolbarButton={this.showFullPostToolbarHandler.bind(this)}
                        show={this.state.showFullPostToolbar}
                        goToPost={this.goToPostHandler.bind(this)}
                        post={this.state.post}/>
                </div>
            );
        }
        return null;
    }

}

const mapDispatchToProps = dispatch => {
    return {
        hidePreloader: () => dispatch(actionCreators.hidePreloader()),
        showPreloader: () => dispatch(actionCreators.showPreloader())
    };
};

export default connect(null, mapDispatchToProps)(FullPost);