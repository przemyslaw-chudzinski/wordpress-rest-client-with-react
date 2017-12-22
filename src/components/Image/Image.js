import React, {Component} from 'react';
import Helper from "../../hoc/Helper";
import PropTypes from 'prop-types';

class Image extends Component {

    getAndPrepareProps(prop = "") {
        if (prop === false || prop === true || prop === "" || prop === undefined) {
            return "";
        }
        return prop;
    }

    render() {
        return (
            <Helper>
                <img
                    src={this.getAndPrepareProps(this.props.source)}
                    alt={this.getAndPrepareProps(this.props.alt)}
                    title={this.getAndPrepareProps(this.props.title)}/>
            </Helper>
        );
    }

}

Image.propTypes = {
    title: PropTypes.string,
    alt: PropTypes.string,
    source: PropTypes.string
};

export default Image;