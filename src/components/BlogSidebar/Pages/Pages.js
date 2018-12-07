import React from 'react';
import Page from "./Page/Page";
import PropTypes from 'prop-types';
import './Pages.css';

export const Pages = props => (
    <div className="Pages">
        {props.header ? <h3>{props.header}</h3> : null}
        <ul>
            <Page main>{props.mainPageLabel || 'Strona Główna'}</Page>
            {props.pages && props.pages.length && props.pages.map(page => <Page key={page.id} slug={page.slug}>{page.title.rendered}</Page>)}
        </ul>
    </div>
);

Pages.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.object),
    header: PropTypes.string,
    mainPageLabel: PropTypes.string
};

export default Pages;