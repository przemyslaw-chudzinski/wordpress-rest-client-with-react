import * as uuid from "uuid";
import AsyncComponent from "../hoc/AsyncComponent";

export const routes = [
    {
        key: uuid(),
        path: "/post/:slug",
        component: AsyncComponent(() => import('../containers/Blog/FullPost/FullPost.js'))
    },
    {
        key: uuid(),
        path: "/page/:slug",
        component: AsyncComponent(() => import('../containers/Blog/FullPage/FullPage'))
    },
    {
        key: uuid(),
        path: "/category/:id/:slug",
        component: AsyncComponent(() => import('../containers/Blog/PostsByCategories/PostsByCategories'))
    },
    {
        key: uuid(),
        path: "/",
        component: AsyncComponent(() => import('../containers/Blog/Posts/Posts')),
        exact: true
    },
];
