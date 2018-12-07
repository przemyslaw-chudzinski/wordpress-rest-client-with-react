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
        const {page} = this.state;
        const {match} = this.props;
        page && page.slug && page.slug !== match.params.slug && this.loadPage(match.params.slug).then(() => goToTopPage());
    }

    loadPage(pageSlug = null) {
        this.props.showPreloader();
        return pageSlug && pageSlug !== '' ? axios.get('/pages?slug=' + pageSlug)
            .then(response => response.data[0])
            .then(page => {
                this.setState({page: page});
                this.props.hideBlogSidebar();
                this.props.hidePreloader();
            }) : null;
    }

    render() {
        const {page} = this.state;
        let fullImage = null;

        page && page.thumbnail && page.thumbnail.full ? (fullImage =  <Image source={page.thumbnail.full} alt={page.thumbnail.alt}/>) : null;

        return page && (
            <div className="FullPageContent">
                <div className="PostThumbnail">
                    {fullImage}
                </div>
                <h1>{page.title.rendered}</h1>
                <div className="ui divider" />
                <div className="content" dangerouslySetInnerHTML={{__html:page.content.rendered}} />
            </div>
        );
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