import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: rgba(3, 169, 244, 1);
  color: white;
  height: 60px;
  line-height: 60px;
  text-align: center;
`;

const StyledH3 = styled.h3`
  margin: 0;
`;

const Footer = (props) => (
  <StyledFooter>
    <StyledH3>{props.footer}</StyledH3>
  </StyledFooter>
);

Footer.propTypes = {
  footer: PropTypes.string
}

export default Footer;
