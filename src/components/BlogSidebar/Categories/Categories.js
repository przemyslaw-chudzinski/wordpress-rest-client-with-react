import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Category from "../../Post/Categories/Category/Category";
import './Categories.css';

class Categories extends Component {

    render() {
        if (this.props.categories && this.props.categories.length) {
            return (
                <div className="Categories">
                    <h3>{this.props.header}</h3>
                    <ul>
                        {this.props.categories.map(category => <Category key={category.id} category={category}>{category.name}</Category>)}
                    </ul>
                </div>
            );
        }
        return null;
    }

}

Categories.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object),
    header: PropTypes.string
};

export default Categories;