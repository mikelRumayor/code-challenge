import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const StyledCard = styled.div`
  background: rgb(170, 170, 170);
  width: calc(100%/3 - 8px);
  max-width: calc(100%/3 - 8px);
  margin: 4px 0;
  border: 1px solid black;
`;
const StyledH3 = styled.h3`
  text-align: center;
`;

const StyledP = styled.p`
  text-align: justify;
  padding: 3%;
`;

const Card = (props) => (
  <StyledCard>
    <Link to={`/${props.article.id}`}>
      <StyledH3>{props.article.author}</StyledH3>
      <StyledP>{props.article.excerpt}</StyledP>
    </Link>
  </StyledCard>
)

Card.propTypes = {
  article: PropTypes.object
}

export default Card
