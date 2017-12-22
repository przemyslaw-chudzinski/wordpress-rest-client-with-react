import React, {Component} from 'react';
import {List} from 'semantic-ui-react';
import PopularPost from "./PopularPost/PopularPost";


class PopularPosts extends Component {

    render() {
        return (
            <div>
                <h3>Popularne artykuły</h3>
                <List verticalAlign='middle'>
                    <PopularPost>Lorem ipsum dolor sit amet, consectetur</PopularPost>
                    <PopularPost>Lorem ipsum dolor sit amet, consectetur</PopularPost>
                    <PopularPost>Lorem ipsum dolor sit amet, consectetur</PopularPost>
                    <PopularPost>Lorem ipsum dolor sit amet, consectetur</PopularPost>
                    <PopularPost>Lorem ipsum dolor sit amet, consectetur</PopularPost>
                </List>
            </div>
        );
    }

}

export default PopularPosts;