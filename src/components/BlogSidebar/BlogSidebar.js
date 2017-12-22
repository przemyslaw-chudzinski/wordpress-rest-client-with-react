import React, {Component} from 'react';
import {Sidebar, Segment} from 'semantic-ui-react';
import './BlogSidebar.css';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import TagsCloud from "./TagsCloud/TagsCloud";
import Pages from "./Pages/Pages";
import Categories from "./Categories/Categories";
import CloseButton from "./CloseButton/CloseButton";

class BlogSidebar extends Component {

    componentDidMount() {
        this.props.fetchPages();
        this.props.fetchCategories();
        this.props.fetchTags();
    }

    render() {
        return (
            <div className="BlogSidebar">
                <Sidebar
                    as={Segment}
                    animation="overlay"
                    visible={this.props.isVisible}>
                    <CloseButton closeSidebar={this.props.hideBlogSidebar}/>
                    <Pages pages={this.props.pages} header="Dodatkowe strony"/>
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
        pages: state.pages.pages,
        categories: state.categories.categories,
        tags: state.tags.tags
    };
};

const mapDispatchToProps = dispatch => {
    return {
        hideBlogSidebar: () => dispatch(actionCreators.hideBlogSidebar()),
        fetchPages: () => dispatch(actionCreators.fetchPages()),
        fetchCategories: () => dispatch(actionCreators.fetchCategories()),
        fetchTags: () => dispatch(actionCreators.fetchTags())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogSidebar);