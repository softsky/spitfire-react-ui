/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';


const StyledLogo = styled('i')`
  display: inline-block;
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: url(${require('./img/logo.png')});
  background-repeat: no-repeat;
  background-position: center;
background-size: contain;
`;

const Logo = ({ width, height, ...props }) => (
  <StyledLogo
    width={width}
    height={height}
    {...props}
  />
);

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Logo.defaultProps = {
  width: '195px',
  height: '165px',
};


export default Logo;
