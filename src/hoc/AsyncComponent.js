import React, {Component} from 'react';

const AsyncComponent = importComponent => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                component: null
            };
        }

        componentDidMount() {
            importComponent().then(cmp => this.setState({component: cmp.default}))
        }

        render() {
            const {component} = this.state;
            const Component = component;
            return Component ? <Component {...this.props} /> : null;
        }
    }
};

export default AsyncComponent