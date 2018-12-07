import * as uuid from "uuid";
import FullPost from "../containers/Blog/FullPost/FullPost";
import FullPage from "../containers/Blog/FullPage/FullPage";
import PostsByCategories from "../containers/Blog/PostsByCategories/PostsByCategories";
import Posts from "../containers/Blog/Posts/Posts";

export const routes = [
    {
        key: uuid(),
        path: "/post/:slug",
        component: FullPost
    },
    {
        key: uuid(),
        path: "/page/:slug",
        component: FullPage
    },
    {
        key: uuid(),
        path: "/category/:id/:slug",
        component: PostsByCategories
    },
    {
        key: uuid(),
        path: "/",
        component: Posts,
        exact: true
    },
];
