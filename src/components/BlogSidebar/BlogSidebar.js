import React, {Component} from 'react';
import {Sidebar, Segment} from 'semantic-ui-react';
import './BlogSidebar.css';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import TagsCloud from "./TagsCloud/TagsCloud";
import Categories from "./Categories/Categories";
import CloseButton from "./CloseButton/CloseButton";
import Pages from "./Pages/Pages";

class BlogSidebar extends Component {

    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchTags();
        this.props.fetchPages();
    }

    render() {
        return (
            <div className="BlogSidebar">
                <Sidebar
                    as={Segment}
                    animation="overlay"
                    visible={this.props.isVisible}>
                    <Pages pages={this.props.pages}/>
                    <CloseButton closeSidebar={this.props.hideBlogSidebar}/>
                    <Categories categories={this.props.categories} header="Główne tematy"/>
                    <TagsCloud tags={this.props.tags} header="Tagi"/>
                </Sidebar>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isVisible: state.blogSidebar.isVisible,
        categories: state.categories.categories,
        tags: state.tags.tags,
        pages: state.pages.pages
    };
};

const mapDispatchToProps = dispatch => {
    return {
        hideBlogSidebar: () => dispatch(actionCreators.hideBlogSidebar()),
        fetchCategories: () => dispatch(actionCreators.fetchCategories()),
        fetchTags: () => dispatch(actionCreators.fetchTags()),
        fetchPages: () => dispatch(actionCreators.fetchPages())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogSidebar);