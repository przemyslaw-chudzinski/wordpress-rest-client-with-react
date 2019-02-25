import React from 'react';
import './CategoryHeader.css';
import PropTypes from 'prop-types';

export const CategoryHeader = ({title, description, imageUrl, imageAlt}) => (
    <div className="CategoryHeader">
        {imageUrl && imageUrl.length ? (
            <div className="image">
                <img src={imageUrl} alt={imageAlt || ''}/>
            </div>
        ) : null}
        <div className="content">
            {title && title.length ? <h1 className="CategoryHeader__title">Kategoria: {title}</h1> : null}
            {description && description.length ? <p className="CategoryHeader__description">{description}</p> : null}
        </div>
    </div>
);

CategoryHeader.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    imageAlt: PropTypes.string
};
