import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Category = props => {
    const {children, category} = props;
    let elem = <li className="ui teal label">{children}</li>;

    if (category) {
        elem = <li className="ui teal label Category"><Link  to={{
            pathname: "/category/" + category.id + "/" + category.slug
        }}>{children}</Link></li>;
    }

    return elem;
};

Category.propTypes = {
    category: PropTypes.object
};

export default Category;