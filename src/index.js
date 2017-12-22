import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import preloaderReducer from "./store/reducers/preloader";
import postsReducer from './store/reducers/posts';
import blogSidebarReducer from "./store/reducers/blogSidebar";
import thunk from 'redux-thunk';
import pagesReducer from "./store/reducers/pages";
import categoriesReducer from "./store/reducers/categories";
import tagsReducer from "./store/reducers/tags";
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost/wordpress-rest-api/wp-json/wp/v2';

const rootReducer = combineReducers({
    preloader: preloaderReducer,
    posts: postsReducer,
    blogSidebar: blogSidebarReducer,
    pages: pagesReducer,
    categories: categoriesReducer,
    tags: tagsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
