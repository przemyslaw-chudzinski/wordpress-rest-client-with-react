import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

export const Image = props => props.source &&  <Fragment><img
    src={props.source}
    alt={props.alt | ""}
    title={props.title || ""} />
</Fragment>;

Image.propTypes = {
    title: PropTypes.string,
    alt: PropTypes.string,
    source: PropTypes.string
};

export default Image;