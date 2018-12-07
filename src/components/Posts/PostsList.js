import React from 'react';
import PropTypes from 'prop-types';
import Post from "../Post/Post";
import './PostsList.css';
import {withRouter} from 'react-router-dom';

const showFullPostHandler = (slug, history) => slug && slug !== '' && history.push({pathname: '/post/' + slug});

export const PostsList = ({posts, history}) =>  posts && posts.length ? (
    <div className="PostsList">
        {posts.map(post => <Post key={post.id} post={post} showFullPost={() => showFullPostHandler(post.slug, history)}/>)}
    </div>
) : <p>Brak artykułów do wyświetlenia</p>;

PostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
};

export default withRouter(PostsList);