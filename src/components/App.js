import React, { Component } from 'react';
import request from '../request';
import { Route , Switch } from 'react-router-dom'
import { ARTICLES_QUERY } from '../queries';

import MainLayout from './MainLayout';
import CardExtended from './CardExtended';

const App = () => (
  <Switch>
    <Route exact path="/" component={MainLayout}/>
    <Route path="/:id" component={CardExtended} />
  </Switch>
);


export default App;
