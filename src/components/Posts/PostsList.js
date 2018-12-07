import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Post from "../Post/Post";
import './PostsList.css';
import {withRouter} from 'react-router-dom';

class PostsList extends Component {

    showFullPostHandler(postSlug = null) {
        const {history} = this.props;
        postSlug && postSlug !== '' && history.push({pathname: '/post/' + postSlug});
    }

    render() {
        const {posts} = this.props;
        return posts && posts.length ? (
            <div className="PostsList">
                {posts.map(post => <Post key={post.id} post={post} showFullPost={this.showFullPostHandler.bind(this)}/>)}
            </div>
        ) : <p>Brak artykułów do wyświetlenia</p>;
    }

}

PostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
};

export default withRouter(PostsList);