import React from 'react';
import {Route} from 'react-router';
import { routes } from '../../routing/routing';

export const Blog = () => <div>
    {routes.map(route => <Route {...route} />)}
</div>;