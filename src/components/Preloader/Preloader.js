import React, {Component} from 'react';
import {Dimmer, Loader} from 'semantic-ui-react';
import {connect} from 'react-redux';
import './Preloader.css';

class Preloader extends Component {

    render() {
        return (
            <div className="Preloader">
                <Dimmer
                    page
                    active={this.props.loading}>
                    <Loader size="big"/>
                </Dimmer>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        loading: state.preloader.loading
    };
};

export default connect(mapStateToProps)(Preloader);