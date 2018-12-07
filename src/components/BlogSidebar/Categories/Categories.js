import React from 'react';
import PropTypes from 'prop-types';
import Category from "../../Post/Categories/Category/Category";
import './Categories.css';

export const Categories = props => (
    <div className="Categories">
        {props.header ? <h3>{props.header}</h3> : null}
        <ul>
            {props.categories && props.categories.length && props.categories.map(category => <Category key={category.id} category={category}>{category.name}</Category>)}
        </ul>
    </div>
);

Categories.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object),
    header: PropTypes.string
};

export default Categories;