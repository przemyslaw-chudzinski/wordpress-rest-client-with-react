import React, {Component} from 'react';
import './Toolbar.css';
import SearchPosts from "../SearchPosts/SearchPosts";
import {NavLink} from 'react-router-dom';
import BlogSidebarButton from "../BlogSidebarButton/BlogSidebarButton";

class Toolbar extends Component {

    render() {
        return (
            <div className="ui inverted segment Toolbar">
                <div className="ui inverted secondary pointing menu">
                    <BlogSidebarButton/>
                    <NavLink exact to="/" className="item">Home</NavLink>
                </div>
                <SearchPosts />
            </div>
        );
    }

}



export default Toolbar;