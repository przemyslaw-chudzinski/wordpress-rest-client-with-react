import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './About.css';

class About extends Component {

    render() {
        return (
            <div className="ui card About">
                <div className="avatar">
                    <img src='http://0.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=96&d=mm&r=g' alt=""/>
                </div>
                <div className="description">
                    <h3><strong>{this.props.author}</strong></h3>
                    <div dangerouslySetInnerHTML={{__html:this.props.description}} />
                </div>
            </div>
        );
    }

}

About.propTypes = {
    author: PropTypes.string,
    description: PropTypes.string
};

export default About;