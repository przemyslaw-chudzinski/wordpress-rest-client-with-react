import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './PrevNext.css';
import {Icon} from 'semantic-ui-react';

class PrevNextPost extends Component {

    render() {

        let arrow_left = <Icon name="chevron left" />;
        let arrow_right = <Icon name="chevron right" />;

        if (this.props.post && this.props.post.slug && this.props.post.slug !== "") {
            return (
                <div className="PrevNext" onClick={this.props.goToPost.bind(this, this.props.post.slug)}>
                    <h4>{this.props.direction === 'prev' ? arrow_left : null}{this.props.post ? this.props.post.title : null} {this.props.direction === 'next' ? arrow_right : null}</h4>
                </div>
            );
        }

        return (
            <div className="PrevNext"></div>
        );
    }

}

PrevNextPost.propTypes = {
    post: PropTypes.object,
    direction: PropTypes.oneOf(['prev', 'next']),
    goToPost: PropTypes.func
};

export default PrevNextPost;