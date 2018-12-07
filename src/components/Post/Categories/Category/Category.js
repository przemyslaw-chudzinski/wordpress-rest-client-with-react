import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Category extends Component {

    render() {
        const {children, category} = this.props;
        let elem = <li className="ui teal label">{this.props.children}</li>;

        if (category) {
           elem = <li className="ui teal label Category"><Link  to={{
               pathname: "/category/" + category.id + "/" + category.slug
           }}>{children}</Link></li>;
        }

        return elem;
    }

}

Category.propTypes = {
    category: PropTypes.object
};

export default Category;