import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Container = styled('div')`
  background: #242736;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: 'MontserratMedium';
`;

const Card = ({ children, ...props }) => (
  <Container {...props}>
    { children }
  </Container>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
