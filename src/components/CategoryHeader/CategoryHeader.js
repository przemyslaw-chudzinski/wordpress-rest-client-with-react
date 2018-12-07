import React, {Component} from 'react';
import './CategoryHeader.css';
import PropTypes from 'prop-types';
import h1 from "eslint-plugin-jsx-a11y/src/util/implicitRoles/h1";

class CategoryHeader extends Component {

    render() {
        const {title, description, image} = this.props;
        return (
            <div className="CategoryHeader">
                {image ? (
                    <div className="image">
                        <img src={image} alt=""/>
                    </div>
                ) : null}
                <div className="content">
                    <h1>Kategoria: {title}</h1>
                    {description ? <p>{description}</p> : null}
                </div>
            </div>
        );
    }
}

CategoryHeader.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
};

export default CategoryHeader;