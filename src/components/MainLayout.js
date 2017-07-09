import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Card from './Card';
import Footer from './Footer';

import styled from 'styled-components';

const StyledCardsContainer = styled.div`
  background: white;
	display: flex;
	flex-wrap: wrap;
  justify-content: space-around;
`;

const MainLayout = (props) => (
  <div className='App'>
    <Header title={'Billin code challenge'}/>
    <StyledCardsContainer>
      {props.articles.map((article, i) => <Card key={i} article={article}/>)}
    </StyledCardsContainer>
    <Footer footer={'Mikel Rumayor'}/>
  </div>
);

MainLayout.propTypes = {
  articles: PropTypes.array
}

export default MainLayout
