import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Post from "../Post/Post";
import './PostsList.css';
import {withRouter} from 'react-router-dom';

class PostsList extends Component {

    showFullPostHandler(postSlug = "") {
        if (postSlug !== "") {
            this.props.history.push({pathname: '/post/' + postSlug});
        }
    }

    render() {

        let posts = <p>Brak artykułów do wyświetlenia</p>;
        if (this.props.posts && this.props.posts.length) {
            posts = this.props.posts.map(post => <Post
                key={post.id} post={post}
                showFullPost={this.showFullPostHandler.bind(this)} />);
        }


        return (
            <div className="PostsList">
                {posts}
            </div>
        );
    }

}

PostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
};

export default withRouter(PostsList);