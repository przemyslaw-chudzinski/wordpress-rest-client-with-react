import React from 'react';
import PropTypes from 'prop-types';
import Category from "./Category/Category";
import './Categories.css';


export const Categories = ({categories}) => categories && categories.length && (
    <ul className="Categories">
        {categories.map(category => <Category key={category.term_id}>{category.name}</Category>)}
    </ul>
);

Categories.propType = {
    categories: PropTypes.arrayOf(PropTypes.object)
};

export default Categories;