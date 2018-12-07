import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Category extends Component {

    render() {

        let elem = <li className="ui teal label">{this.props.children}</li>;

        if (this.props.category) {
           elem = <li className="ui teal label Category"><Link  to={{
               pathname: "/category/" + this.props.category.id + "/" + this.props.category.slug
           }}>{this.props.children}</Link></li>;
        }

        return elem;
    }

}

Category.propTypes = {
    category: PropTypes.object
};

export default Category;