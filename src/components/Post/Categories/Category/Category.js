import React, {Component} from 'react';

class Category extends Component {

    render() {
        return (
            <li className="ui teal label">{this.props.children}</li>
        );
    }

}

export default Category;