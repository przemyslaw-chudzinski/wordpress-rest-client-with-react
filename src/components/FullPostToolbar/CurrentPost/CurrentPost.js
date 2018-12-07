import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CurrentPost.css';

class CurrentPost extends Component {

    render() {
        const {postTitle} = this.props;
        return (
            <div className="CurrentPost">
                <h4>Aktualnie czytasz: </h4>
                <div>{postTitle}</div>
            </div>
        );
    }

}

CurrentPost.propTypes = {
    postTitle: PropTypes.string
};

export default CurrentPost;