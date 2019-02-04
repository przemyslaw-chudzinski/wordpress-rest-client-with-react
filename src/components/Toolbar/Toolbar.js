import React, {Fragment} from 'react';
import './Toolbar.css';
import SearchPosts from "../SearchPosts/SearchPosts";
import {NavLink} from 'react-router-dom';
import BlogSidebarButton from "../BlogSidebarButton/BlogSidebarButton";
import {connect} from "react-redux";
import {Button, Icon} from "semantic-ui-react";
import * as actionCreators from '../../store/actions/index';

export const Toolbar = ({pages, userStore, logOut}) =>  <div className="ui inverted segment Toolbar">
    <div className="ui inverted secondary pointing menu left">
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
    <div className="right">
        <SearchPosts />
        {userStore && userStore.user && (
            <Fragment>
                <div className="user-data">{userStore.user.user_display_name}</div>
                <Button icon onClick={logOut}>
                    <Icon name='power' />
                </Button>
            </Fragment>
        )}
    </div>
</div>;

    const mapStateToProps = state => ({
        userStore: state.user
    });

    const mapDispatchToProps = dispatch => ({
        logOut: () => dispatch(actionCreators.logOut())
    });

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
