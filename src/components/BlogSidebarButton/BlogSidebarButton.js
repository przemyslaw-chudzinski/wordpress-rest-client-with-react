import React, {Component} from 'react';
import * as actionCreators from "../../store/actions/index";
import {Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import './BlogSidebarButton.css';
import PropTypes from 'prop-types';

class BlogSidebarButton extends Component {

    render() {
        const {showBlogSidebar} = this.props;
        return (
            <div className="item BlogSidebarButton" onClick={showBlogSidebar.bind(this)}>
                <Icon name="bars"/>
            </div>
        );
    }

}
BlogSidebarButton.propTypes = {
    showBlogSidebar: PropTypes.func
};

const mapDispatchToProps = dispatch => {
    return {
        showBlogSidebar: () => dispatch(actionCreators.showBlogSidebar())
    };
};

export default connect(null, mapDispatchToProps)(BlogSidebarButton);