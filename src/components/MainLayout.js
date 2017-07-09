import React from 'react';
import { Route , Switch } from 'react-router-dom'

import Header from './Header';
import CardList from './CardList';
import CardExtended from './CardExtended';

import Footer from './Footer';


const MainLayout = () => (
    <div className='App'>
      <Header title={'Billin code challenge'}/>
      <Switch>
        <Route exact path="/" component={CardList} />
        <Route path="/:id" component={CardExtended} />
      </Switch>
      <Footer footer={'Mikel Rumayor'}/>
    </div>
)

export default MainLayout
