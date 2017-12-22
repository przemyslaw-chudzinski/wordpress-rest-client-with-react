import $ from 'jquery';

export const parseDate = format => {
    const d = new Date(format);
    return d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
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