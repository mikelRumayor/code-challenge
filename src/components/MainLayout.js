import React from 'react';
import PropTypes from 'prop-types';

import request from '../request';
import { ARTICLES_QUERY } from '../queries';

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

class MainLayout extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      articles: []
    };
  }

  // lifecycle
  componentWillMount() {
    request.getAllArticles(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  render () {
    return (
      <div className='App'>
        <Header title={'Billin code challenge'}/>
        <StyledCardsContainer>
          {this.state.articles.map((article, i) => <Card key={i} article={article}/>)}
        </StyledCardsContainer>
        <Footer footer={'Mikel Rumayor'}/>
      </div>
    )
  }
};

MainLayout.propTypes = {
  articles: PropTypes.array
}

export default MainLayout
