import React, { Component } from 'react';
import Layout from "./hoc/Layout/Layout";
import Blog from "./containers/Blog/Blog";
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Layout>
                <Blog/>
            </Layout>
        </BrowserRouter>
    );
  }
}

export default App;
