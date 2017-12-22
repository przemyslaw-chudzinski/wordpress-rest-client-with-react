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
    }

    onSearchChangeHandler(e, { value }) {

        if (value && value !== "" && value !== null) {
            this.setState({isLoading: true});
            axios.get('http://localhost/wordpress-rest-api/wp-json/wp/v2/posts?per_page='+ config.perPage +'&search=' + value)
                .then(response => response.data)
                .then(searchResults => {
                    this.setState(prevState => {
                        const newSearchResults = searchResults.map(result => {

                            let thumbnail = null;
                            if (result.thumbnail) {
                                thumbnail = result.thumbnail.fi_50x50;
                            }

                            return {
                                title: result.title.rendered,
                                image: thumbnail,
                                description: result.post_author.name,
                                slug: result.slug,
                                post_id: result.id
                            };
                        });
                        return {
                            results: newSearchResults
                        };
                    });
                    this.setState({
                        isLoading: false
                    });
                });
        }
    }

    onResultSelectHandler(e, { result }) {
        if (result.slug && result.slug !== "") {
            this.props.history.push({pathname: '/post/' + result.slug});
        }
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

        let classes = ['SearchPosts'];
        if (this.state.onFocus) {
            classes = ['SearchPosts', 'SearchPostsLarge']
        }

        return (
            <div className={classes.join(' ')}>
                <Search
                    onSearchChange={this.onSearchChangeHandler.bind(this)}
                    onResultSelect={this.onResultSelectHandler.bind(this)}
                    onFocus={this.onFocusHandler.bind(this)}
                    onBlur={this.onBlurHandler.bind(this)}
                    results={this.state.results}
                    minCharacters={config.minCharacters}
                    loading={this.state.isLoading}/>
            </div>
        );
    }

}

export default withRouter(SearchPosts);