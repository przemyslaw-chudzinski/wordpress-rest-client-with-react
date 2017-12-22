import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Page extends Component {
    render() {
        return (
            <li><Link to={'/page/' + this.props.slug}>{this.props.children}</Link></li>
        );
    }
}

Page.propTypes = {
    slug: PropTypes.string
};

export default Page;