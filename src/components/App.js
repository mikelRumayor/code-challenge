import React, { Component } from 'react';
import request from '../request';
import { ARTICLES_QUERY } from '../queries';

import MainLayout from './MainLayout';

class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    const props = this.state

    return (
      <MainLayout {...props}/>
    );
  }
}

export default App;
