import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, {history} from '../store';

import MainLayout from './MainLayout';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MainLayout />
    </ConnectedRouter>
  </Provider>
);


export default App;
