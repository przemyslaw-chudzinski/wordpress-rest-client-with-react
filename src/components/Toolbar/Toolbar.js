import React, {Component} from 'react';
import './Toolbar.css';
import SearchPosts from "../SearchPosts/SearchPosts";
import {NavLink} from 'react-router-dom';
import BlogSidebarButton from "../BlogSidebarButton/BlogSidebarButton";
import * as actionCreators from "../../store/actions";
import {connect} from "react-redux";

class Toolbar extends Component {

    componentDidMount() {
        this.props.fetchPages();
    }

    render() {
        const {pages} = this.props;
        return (
            <div className="ui inverted segment Toolbar">
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
            </div>
        );
    }

}

const mapStateToProps = state => ({
    pages: state.pages.pages
});

const mapDispatchToProps = dispatch => ({
    fetchPages: () => dispatch(actionCreators.fetchPages()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);