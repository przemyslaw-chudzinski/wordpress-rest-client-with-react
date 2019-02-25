import $ from 'jquery';

export const parseDate = format => {
    if (format == null || !format) return null;
    const d = new Date(format);
    const month = d.getMonth() + 1;
    return d.getDate() + '-' + (month < 10 ? '0' + month : month) + '-' + d.getFullYear();
};

export const goToTopPage = () => {
    const $bodyHtml = $('html, body');
    const currentScrollTop = $bodyHtml.scrollTop();
    if (currentScrollTop > 50) {
        $bodyHtml.animate({
            scrollTop: 0 + 'px'
        }, 300);
    }
};

export const calculateOffset = ({pageNumber, perPage}) => {
    return typeof pageNumber === 'number' && typeof perPage === 'number' ? (pageNumber - 1) * perPage : null;
};

export const assignQueryParams = (params = {}) => {
    const keys = params ? Object.keys(params) : [];
    const paramsArr = keys.length ? keys.map(key => params[key] !== null ? `${key}=${params[key]}` : null).filter(key => key) : [];
    const queryString = paramsArr && paramsArr.length ? paramsArr.join('&') : '';
    return queryString && queryString.length ? `?${queryString}` : '';
};

export const isCallable = expr => expr && typeof expr === 'function';
