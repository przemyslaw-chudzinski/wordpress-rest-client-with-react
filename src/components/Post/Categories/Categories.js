import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Category from "./Category/Category";
import './Categories.css';

class Categories extends Component {

    render() {
        const {categories} = this.props;
        return categories && categories.length && (
            <ul className="Categories">
                {categories.map(category => <Category key={category.term_id}>{category.name}</Category>)}
            </ul>
        );
    }

}

Categories.propType = {
    categories: PropTypes.arrayOf(PropTypes.object)
};

export default Categories;