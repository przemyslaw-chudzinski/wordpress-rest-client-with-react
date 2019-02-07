const assignQueryParams = (params = {}) => {
    const keys = Object.keys(params);
    let queryString = keys.length ? keys.map(key => params[key] !== null ? `${key}=${params[key]}` : '').join('&') : '';
    return queryString && queryString.length ? `?${queryString}` : '';
};

export const endpoints = {
    postEndpoints: {
        list: (per_page = null, offset = null, categories = null, search = null) => '/posts' + assignQueryParams({per_page, offset, categories, search}),
        single: slug => '/posts' + assignQueryParams({slug})
    },
    categoryEndpoints: {
        list: (per_page = null, offset = null) => '/categories' + assignQueryParams({per_page, offset})
    },
    tagEndpoints: {
        list: (per_page = null, offset = null) => '/tags' + assignQueryParams({per_page, offset})
    },
    pageEndpoints: {
        list: (per_page = null, offset = null) => '/pages' + assignQueryParams({per_page, offset}),
        single: slug => '/pages' + assignQueryParams({slug})
    },
    commentEndpoints: {
        list: (per_page = 10, offset = 0, post = 0, parent = null) => '/comments' + assignQueryParams({per_page, offset, post, parent}),
        create: () => '/comments'
    },
    authEndpoints: {
        singIn: () => 'http://localhost/wordpress-rest-api/wp-json/jwt-auth/v1/token'
    }
};
