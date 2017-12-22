import React, {Component} from 'react';
import {List} from 'semantic-ui-react';

class PopularPost extends Component {

    render() {
        return (
            <div>
                <List.Item>
                    {/*<Image avatar src='http://placehold.it/50x50' />*/}
                    <List.Content>
                        <List.Header>{this.props.children}</List.Header>
                    </List.Content>
                </List.Item>
            </div>
        );
    }

}

export default PopularPost;