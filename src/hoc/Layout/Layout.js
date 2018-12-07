import React, {Component} from 'react';
import Toolbar from "../../components/Toolbar/Toolbar";
import './Layout.css';
import Preloader from '../../components/Preloader/Preloader';
import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";

class Layout extends Component {

    render() {
        const {children} = this.props;
        return (
            <div className="Layout">
                <Toolbar/>
                <div className="ui container">
                    {children}
                </div>
                <Preloader />
                <BlogSidebar />
            </div>
        );
    }

}


export default Layout;