import React, {Component} from 'react';
import Page from "./Page/Page";
import PropTypes from 'prop-types';
import './Pages.css';

class Pages extends Component {

    render() {
        const {header, pages, mainPageLabel} = this.props;
        return (
            <div className="Pages">
                {header ? <h3>{header}</h3> : null}
                <ul>
                    <Page main>{mainPageLabel || 'Strona Główna'}</Page>
                    {pages && pages.length &&pages.map(page => <Page key={page.id} slug={page.slug}>{page.title.rendered}</Page>)}
                </ul>
            </div>
        )
    }
}

Pages.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.object),
    header: PropTypes.string,
    mainPageLabel: PropTypes.string
};

export default Pages;