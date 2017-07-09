import React, { Component } from 'react';
import request from '../request';
import { ARTICLES_QUERY } from '../queries';

import MainLayout from './MainLayout';
import { Route , Switch } from 'react-router-dom'


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
      <Switch>
        <Route exact path="/" render={() => <MainLayout {...props}/>} />
        <Route path="/:id" render={() => <h1> hola </h1>} />
      </Switch>
    );
  }
}

export default App;
