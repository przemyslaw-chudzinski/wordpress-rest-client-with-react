import React, {Component} from 'react';
import {Route} from 'react-router';
import { routes } from '../../routing/routing';

class Blog extends Component {

    render() {
        return (
            <div>
                {routes.map(route => <Route {...route} />)}
            </div>
        );
    }

}

export default Blog;