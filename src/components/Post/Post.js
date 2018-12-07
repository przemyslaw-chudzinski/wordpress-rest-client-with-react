import React, {Component} from 'react';
import './Post.css';
import PropTypes from 'prop-types';
import Categories from "./Categories/Categories";
import Image from "../Image/Image";

class Post extends Component {

    getExcerpt(length = 100) {
        return this.props.post.excerpt.rendered.slice(0, length) + "..."
    }

    render() {
        const {showFullPost, post} = this.props;
        let thumbnail = <Image source="http://placehold.it/300x180" alt="Miniaturka" title="miniaturka"/>;

        post.thumbnail && post.thumbnail.medium ? thumbnail = <Image source={post.thumbnail.fi_300x180} alt={post.thumbnail.alt} /> : null;

        return post && (
            <div className="ui card Post" onClick={showFullPost.bind(this, post.slug)}>
                {/* Post thumbnail */}
                <div className="image">
                    {thumbnail}
                </div>
                <div className="content">
                    <a className="header">{post.title.rendered}</a>
                    {/* Post meta */}
                    <div className="meta">
                        <strong>Autor: {post.post_author.name}</strong>
                    </div>
                    <div className="description" dangerouslySetInnerHTML={{__html:this.getExcerpt()}} />
                </div>
                {/* Post comments */}
                <div className="extra content">
                    <a>
                        <i className="comments icon"></i>
                        22 Comments
                    </a>
                </div>
                {/* Post categories */}
                <Categories categories={post.categories} />
            </div>
        );
    }

}

Post.propTypes = {
    post: PropTypes.object,
    showFullPost: PropTypes.func
};

export default Post;