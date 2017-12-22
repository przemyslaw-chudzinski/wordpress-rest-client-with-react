import React, {Component} from 'react';
import Posts from "./Posts/Posts";
import {Route} from 'react-router';
import FullPost from "./FullPost/FullPost";
import FullPage from "./FullPage/FullPage";
import PostsByCategories from "./PostsByCategories/PostsByCategories";

class Blog extends Component {

    render() {
        return (
            <div>
                <Route path="/post/:slug" component={FullPost} />
                <Route path="/page/:slug" component={FullPage} />
                <Route path="/category/:id/:slug" component={PostsByCategories} />
                <Route path="/" exact component={Posts} />
            </div>
        );
    }

}

export default Blog;