import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledCard = styled.div`
  background: rgb(170, 170, 170);
  width: calc(100%/3 - 8px);
  max-width: calc(100%/3 - 8px);
  margin: 4px 0;
  border: 1px solid black;
`
const StyledH2 = styled.h2`
  text-align: center;
`
const StyledH3 = styled.h3`
  text-align: center;
`

const StyledP = styled.p`
  text-align: justify;
  padding: 3%;
`

const Card = (props) => (
  <StyledCard>
    <Link to={`/${props.id}`}>
      <StyledH2>{props.title}</StyledH2>
      <StyledH3>{props.author}</StyledH3>
      <StyledP>{props.excerpt}</StyledP>
    </Link>
  </StyledCard>
)

Card.propTypes = {
  article: PropTypes.object
}

export default Card
