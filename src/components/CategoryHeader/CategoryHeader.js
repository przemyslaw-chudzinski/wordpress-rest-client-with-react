import React from 'react';
import './CategoryHeader.css';
import PropTypes from 'prop-types';
import h1 from "eslint-plugin-jsx-a11y/src/util/implicitRoles/h1";

export const CategoryHeader = props => (
    <div className="CategoryHeader">
        {props.image ? (
            <div className="image">
                <img src={props.image} alt=""/>
            </div>
        ) : null}
        <div className="content">
            <h1>Kategoria: {props.title}</h1>
            {props.description ? <p>{props.description}</p> : null}
        </div>
    </div>
);

CategoryHeader.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
};

export default CategoryHeader;