import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Category from "./Category/Category";
import './Categories.css';

class Categories extends Component {

    render() {

        let categories = null;

        if (this.props.categories.length) {
            categories = this.props.categories.map(category => <Category key={category.term_id}>{category.name}</Category>)
        }

        return (
            <ul className="Categories">
                {categories}
            </ul>
        );
    }

}

Categories.propType = {
    categories: PropTypes.arrayOf(PropTypes.object)
};

export default Categories;