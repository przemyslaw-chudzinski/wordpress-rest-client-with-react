import React, {Component} from 'react';
import {Search} from 'semantic-ui-react';
import axios from 'axios';
import './SearchPosts.css';
import {withRouter} from 'react-router-dom';

const config = {
    perPage: 5,
    minCharacters: 2
};

class SearchPosts extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            isLoading: false,
            results: [],
            onFocus: false
        };
        this._timeoutHandler = null;
    }

    fetchPosts(value) {
        // TODO: Refaktoring
        return axios.get('/posts?per_page='+ config.perPage +'&search=' + value)
            .then(response => response.data)
            .then(searchResults => {
                const results = searchResults && searchResults.length && searchResults.map(result => {
                    return {
                        title: result.title.rendered,
                        image: result.thumbnail ? result.thumbnail.fi_50x50 : null,
                        description: result.post_author.name,
                        slug: result.slug,
                        post_id: result.id
                    };
                });
                this.setState({results, isLoading: false});
            });
    }

    onSearchChangeHandler(e, { value }) {
        if (value && value !== "" && value !== null) {
            this.setState({isLoading: true});
            clearTimeout(this._timeoutHandler);
            this._timeoutHandler = setTimeout(() => this.fetchPosts(value), 400);
        }
    }

    onResultSelectHandler(e, {result}) {
        e.preventDefault();
        e.stopPropagation();
        const {history} = this.props;
        result.slug && result.slug !== "" && history.push({pathname: '/post/' + result.slug});
    }

    onFocusHandler() {
        this.setState({onFocus: true});
    }

    onBlurHandler() {
        this.setState({
            onFocus: false,
            results: []
        });
    }

    render() {
        const {results, isLoading, onFocus} = this.state;
        let classes = onFocus ? ['SearchPosts', 'SearchPostsLarge'] : ['SearchPosts'];

        return (
            <div className={classes.join(' ')}>
                <Search
                    onSearchChange={this.onSearchChangeHandler.bind(this)}
                    onResultSelect={this.onResultSelectHandler.bind(this)}
                    onFocus={this.onFocusHandler.bind(this)}
                    onBlur={this.onBlurHandler.bind(this)}
                    results={results}
                    minCharacters={config.minCharacters}
                    loading={isLoading}/>
            </div>
        );
    }

}

export default withRouter(SearchPosts);
