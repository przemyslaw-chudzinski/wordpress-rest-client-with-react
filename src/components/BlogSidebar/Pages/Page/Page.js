import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export const Page = props => props.main ?
    <li className="page-link"><Link to="/">{props.children}</Link></li> :
    <li className="page-link"><Link to={'/page/' + props.slug}>{props.children}</Link></li>;

Page.propTypes = {
    slug: PropTypes.string,
    main: PropTypes.bool
};

export default Page;