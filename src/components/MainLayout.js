import React from 'react';
import { Route , Switch } from 'react-router-dom'

import Header from './Header';
import CardListContainer from '../containers/CardListContainer';

import CardExtended from './CardExtended';

import Footer from './Footer';


const MainLayout = () => (
    <div className='App'>
      <Header title={'Billin code challenge'}/>
      <Switch>
        <Route exact path="/" component={CardListContainer} />
        <Route path="/:id" component={CardExtended} />
      </Switch>
      <Footer footer={'Mikel Rumayor'}/>
    </div>
)

export default MainLayout
