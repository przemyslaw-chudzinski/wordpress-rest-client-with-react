import React, {Component} from 'react';
import './Post.css';
import PropTypes from 'prop-types';
import Categories from "./Categories/Categories";
import Image from "../Image/Image";

class Post extends Component {

    /* TODO: Refaktoryzacja */
    parseDate(format) {
        const d = new Date(format);
        return d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
    }

    render() {

        let thumbnail = <Image
                            source="http://placehold.it/300x180"
                            alt="Miniaturka"
                            title="miniaturka"/>;

        if (this.props.post.thumbnail.medium) {
            thumbnail = <Image
                source={this.props.post.thumbnail.fi_300x180}
                alt={this.props.post.thumbnail.alt} />
        }

        if (this.props.post) {
            return (
                <div className="ui card Post" onClick={this.props.showFullPost.bind(this, this.props.post.slug)}>
                    <div className="image">
                        {thumbnail}
                    </div>
                    <div className="content">
                        <a className="header">{this.props.post.title.rendered}</a>
                        <div className="meta">
                            <span>{this.parseDate(this.props.post.date)}</span>
                            <strong>{this.props.post.post_author.name}</strong>
                        </div>
                        <div className="description" dangerouslySetInnerHTML={{__html:this.props.post.excerpt.rendered.slice(0, 100)}} />
                    </div>
                    <div className="extra content">
                        <a>
                            <i className="comments icon"></i>
                            22 Comments
                        </a>
                    </div>
                    <Categories categories={this.props.post.categories} />
                </div>
            );
        }
        return null;
    }

}

Post.propTypes = {
    post: PropTypes.object,
    showFullPost: PropTypes.func
};

export default Post;