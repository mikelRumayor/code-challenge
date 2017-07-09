import React from 'react';
import styled from 'styled-components';

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
    <StyledH3>{props.article.author}</StyledH3>
    <StyledP>{props.article.excerpt}</StyledP>
  </StyledCard>
)

export default Card
