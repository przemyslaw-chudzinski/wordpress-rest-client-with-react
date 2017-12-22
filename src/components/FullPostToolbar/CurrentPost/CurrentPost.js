import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CurrentPost.css';

class CurrentPost extends Component {

    render() {
        return (
            <div className="CurrentPost">
                <h4>Aktualnie czytasz: </h4>
                <div>{this.props.postTitle}</div>
            </div>
        );
    }

}

CurrentPost.propTypes = {
    postTitle: PropTypes.string
};

export default CurrentPost;