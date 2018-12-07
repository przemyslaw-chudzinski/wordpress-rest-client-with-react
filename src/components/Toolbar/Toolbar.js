import React from 'react';
import './Toolbar.css';
import SearchPosts from "../SearchPosts/SearchPosts";
import {NavLink} from 'react-router-dom';
import BlogSidebarButton from "../BlogSidebarButton/BlogSidebarButton";

export const Toolbar = ({pages}) =>  <div className="ui inverted segment Toolbar">
    <div className="ui inverted secondary pointing menu">
        <BlogSidebarButton/>
        <NavLink exact to="/" className="item item__menu" activeClassName="active">Strona Główna</NavLink>
        {pages && pages.length ? pages.map(page =>
            <NavLink key={page.id}
                     exact
                     className="item item__menu"
                     activeClassName="active"
                     to={'/page/' + page.slug}>
                {page.title.rendered}</NavLink>) : null}
    </div>
    <SearchPosts />
</div>;

export default Toolbar;