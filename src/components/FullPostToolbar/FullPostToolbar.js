import React, {Component} from 'react';
import './FullPostToolbar.css';
import PrevNextPost from "./PrevNextPost/PrevNextPost";
import PropTypes from 'prop-types';
import CurrentPost from "./CurrentPost/CurrentPost";
import ToolbarToggleButton from "./ToolbarToggleButton/ToolbarToggleButton";

class FullPostToolbar extends Component {

    render() {

        const {show, goToPost, post, showFullPostToolbarButton} = this.props;

        let classes = ['FullPostToolbar', 'FullPostToolbarOpen'];
        if (!show) {
            classes = ['FullPostToolbar', 'FullPostToolbarClosed'];
        }

        return (
            <div className={classes.join(' ')}>
                <PrevNextPost goToPost={goToPost.bind(this)} post={post.prev_post} direction="prev" />
                <CurrentPost postTitle={post.title.rendered}/>
                <PrevNextPost goToPost={goToPost.bind(this)} direction="next" post={post.next_post} />
                <ToolbarToggleButton open={show} clickHandler={showFullPostToolbarButton.bind(this)}/>
            </div>
        );
    }

}

FullPostToolbar.propTypes = {
    post: PropTypes.object,
    goToPost: PropTypes.func,
    show: PropTypes.bool,
    showFullPostToolbarButton: PropTypes.func
};

export default FullPostToolbar;