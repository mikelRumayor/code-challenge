import React from 'react';
import PropTypes from 'prop-types';

import { ARTICLES_QUERY } from '../queries';

import Card from './Card';

import styled from 'styled-components';

const StyledCardsContainer = styled.div`
  background: white;
	display: flex;
	flex-wrap: wrap;
  justify-content: space-around;
`;

class CardList extends React.Component {

  // lifecycle
  componentWillMount() {
    this.props.actions.getAllArticles(ARTICLES_QUERY)
    /*request.getAllArticles(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });*/
  }

  render () {
    return (
      <StyledCardsContainer>
        {this.props.articles && this.props.articles.map((article, i) => <Card key={i} article={article}/>)}
      </StyledCardsContainer>
    )
  }
};

CardList.propTypes = {
  articles: PropTypes.array
}

export default CardList
