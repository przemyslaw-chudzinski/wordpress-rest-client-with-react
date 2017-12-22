import React, {Component} from 'react';
import Posts from "./Posts/Posts";
import {Route} from 'react-router';
import FullPost from "./FullPost/FullPost";
import FullPage from "./FullPage/FullPage";

class Blog extends Component {

    render() {
        return (
            <div>
                <Route path="/post/:slug" component={FullPost} />
                <Route path="/page/:slug" component={FullPage} />
                <Route path="/" exact component={Posts} />
            </div>
        );
    }

}

export default Blog;