import React, {Component} from 'react';
import Toolbar from "../../components/Toolbar/Toolbar";
import './Layout.css';
import Preloader from '../../components/Preloader/Preloader';
import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";
import * as actionCreators from "../../store/actions";
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router";

class Layout extends Component {

    componentDidMount() {
        this.props.fetchPages();
    }

    render() {
        const {children, pages} = this.props;
        return (
            <div className="Layout">
                <Toolbar pages={pages}/>
                <div className="ui container">
                    {children}
                </div>
                <Preloader />
                <BlogSidebar />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));