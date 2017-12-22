import React, {Component} from 'react';
import Page from "./Page/Page";
import PropTypes from 'prop-types';
import './Pages.css';

class Pages extends Component {

    render() {
        if (this.props.pages && this.props.pages.length) {
            return (
                <div className="Pages">
                    <h3>{this.props.header}</h3>
                    <ul>
                        {this.props.pages.map(page => <Page key={page.id} slug={page.slug}>{page.title.rendered}</Page>)}
                    </ul>
                </div>
            );
        }
        return null;
    }
}

Pages.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.object),
    header: PropTypes.string
};

export default Pages;