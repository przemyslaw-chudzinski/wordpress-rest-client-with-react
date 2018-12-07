import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './About.css';

class About extends Component {

    render() {
        const {author} = this.props;
        return author && (
            <div className="ui card About">
                <div className="avatar">
                    <img src='http://0.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=96&d=mm&r=g' alt=""/>
                </div>
                <div className="description">
                    {author.name ? <h3><strong>{author.name}</strong></h3> : null}
                    {author.description ? <div dangerouslySetInnerHTML={{__html: author.description}} /> : null}
                </div>
            </div>
        );
    }

}

About.propTypes = {
    author: PropTypes.object
};

export default About;