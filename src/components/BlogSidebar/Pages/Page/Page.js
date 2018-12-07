import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Page extends Component {
    render() {
        return this.props.main ?
            <li className="page-link"><Link to="/">{this.props.children}</Link></li> :
            <li className="page-link"><Link to={'/page/' + this.props.slug}>{this.props.children}</Link></li>;
    }
}

Page.propTypes = {
    slug: PropTypes.string,
    main: PropTypes.bool
};

export default Page;