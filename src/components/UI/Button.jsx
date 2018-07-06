import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';


const StyledButton = styled('a')(({ theme }) => `
  font-family: 'MontserratBold';
  font-size: 12.5px;
  cursor: pointer;
  color: #ffffff;
  padding: 7px 20px;
  border-radius: 50px;
  background: ${theme.red};
  transition: opacity .2s;
  
  &:hover {
    opacity: .8;
  }
`);

const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>
    { children }
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
