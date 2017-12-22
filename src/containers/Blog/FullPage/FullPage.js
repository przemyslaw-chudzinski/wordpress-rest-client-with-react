import React, {Component} from 'react';
import axios from 'axios';
import Image from "../../../components/Image/Image";
import * as actionCreators from '../../../store/actions/index';
import {connect} from 'react-redux';
import {goToTopPage} from "../../../utils/utils";

class FullPage extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            page: null
        }
    }

    componentDidMount() {
        this.loadPage(this.props.match.params.slug);
    }

    componentDidUpdate() {
        if (this.state.page && this.state.page.slug && this.state.page.slug !== this.props.match.params.slug){
            this.loadPage(this.props.match.params.slug)
                .then(() => goToTopPage());
        }
    }

    loadPage(pageSlug = "") {
        this.props.showPreloader();
        if (pageSlug !== "" && pageSlug !== null && pageSlug !== undefined) {
            return axios.get('http://localhost/wordpress-rest-api/wp-json/wp/v2/pages?slug=' + pageSlug)
                .then(response => response.data[0])
                .then(page => {
                    this.setState({page: page});
                    this.props.hideBlogSidebar();
                    this.props.hidePreloader();
                });
        }
    }

    render() {

        if (this.state.page) {
            let fullImage = null;
            if (this.state.page.thumbnail) {
                fullImage = <Image
                    source={this.state.page.thumbnail.full}
                    alt={this.state.page.thumbnail.alt}/>
            }
            return (
                <div className="FullPageContent">
                    <div className="PostThumbnail">
                        {fullImage}
                    </div>
                    <h1>{this.state.page.title.rendered}</h1>
                    <div className="ui divider" />
                    <div className="content"
                    dangerouslySetInnerHTML={{__html:this.state.page.content.rendered}} />
                </div>
            );
        }
        return null;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hidePreloader: () => dispatch(actionCreators.hidePreloader()),
        showPreloader: () => dispatch(actionCreators.showPreloader()),
        hideBlogSidebar: () => dispatch(actionCreators.hideBlogSidebar())
    };
};


export default connect(null, mapDispatchToProps)(FullPage);