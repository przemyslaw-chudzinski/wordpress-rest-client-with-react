import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

export const Image = ({source, alt, title}) => source && source.length &&  <Fragment>
    <img
        src={source}
        alt={alt || ""}
        title={title || ""} />
</Fragment>;

Image.propTypes = {
    title: PropTypes.string,
    alt: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
};

export default Image;
