import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class Image extends Component {

    getAndPrepareProps(prop = "") {
        return prop === false || prop === true || prop === "" || prop === undefined ? "" : prop;
    }

    render() {
        return (
            <Fragment>
                <img
                    src={this.getAndPrepareProps(this.props.source)}
                    alt={this.getAndPrepareProps(this.props.alt)}
                    title={this.getAndPrepareProps(this.props.title)}/>
            </Fragment>
        );
    }

}

Image.propTypes = {
    title: PropTypes.string,
    alt: PropTypes.string,
    source: PropTypes.string
};

export default Image;