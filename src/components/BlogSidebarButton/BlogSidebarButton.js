import React, {Component} from 'react';
import * as actionCreators from "../../store/actions/index";
import {Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import './BlogSidebarButton.css';

class BlogSidebarButton extends Component {

    render() {
        return (
            <div className="item BlogSidebarButton" onClick={this.props.showBlogSidebar}>
                <Icon name="bars"/>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        showBlogSidebar: () => dispatch(actionCreators.showBlogSidebar())
    };
};

export default connect(null, mapDispatchToProps)(BlogSidebarButton);