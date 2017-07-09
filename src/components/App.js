import React from 'react';
import { Route , Switch } from 'react-router-dom'

import MainLayout from './MainLayout';
import CardExtended from './CardExtended';

const App = () => (
  <Switch>
    <Route exact path="/" component={MainLayout}/>
    <Route path="/:id" component={CardExtended} />
  </Switch>
);


export default App;
