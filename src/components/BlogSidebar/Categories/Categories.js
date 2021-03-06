import React from 'react';
import PropTypes from 'prop-types';
import Category from "../../Post/Categories/Category/Category";
import './Categories.css';

export const Categories = ({header, categories}) => (
    <div className="Categories">
        {header ? <h3>{header}</h3> : null}
        <ul>
            {categories && categories.length && categories.map(category => <Category key={category.id} category={category}>{category.name}</Category>)}
        </ul>
    </div>
);

Categories.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object),
    header: PropTypes.string
};

export default Categories;
