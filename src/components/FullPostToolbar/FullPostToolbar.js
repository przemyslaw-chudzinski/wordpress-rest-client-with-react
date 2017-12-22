import React, {Component} from 'react';
import './FullPostToolbar.css';
import PrevNextPost from "./PrevNextPost/PrevNextPost";
import PropTypes from 'prop-types';
import CurrentPost from "./CurrentPost/CurrentPost";
import ToolbarToggleButton from "./ToolbarToggleButton/ToolbarToggleButton";

class FullPostToolbar extends Component {

    render() {

        let classes = ['FullPostToolbar', 'FullPostToolbarOpen'];
        if (!this.props.show) {
            classes = ['FullPostToolbar', 'FullPostToolbarClosed'];
        }

        return (
            <div className={classes.join(' ')}>
                <PrevNextPost goToPost={this.props.goToPost.bind(this)} post={this.props.post.prev_post} direction="prev" />
                <CurrentPost postTitle={this.props.post.title.rendered}/>
                <PrevNextPost goToPost={this.props.goToPost.bind(this)} direction="next" post={this.props.post.next_post} />
                <ToolbarToggleButton clickHandler={this.props.showFullPostToolbarButton.bind(this)}/>
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