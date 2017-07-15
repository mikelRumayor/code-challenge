import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const StyledCard = styled.header`
  background: rgba(3, 169, 244, 1);
  color: white;
  height: 60px;
  line-height: 60px;
  text-align: center;
`

const StyledH2 = styled.h2`
  margin: 0;
`

const Header = (props) => (
  <StyledCard>
    <StyledH2>{props.title}</StyledH2>
  </StyledCard>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
