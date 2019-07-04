import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import FontAwesome from 'react-fontawesome';


const StyledTitle = styled('p')`
  color: #ffffff;
  font-size: 20px;
  margin: 0 0 30px 0;
  font-family: 'MontserratSemiBold';
`;

const Icon = styled(FontAwesome)`
  margin-right: 10px;
  font-size: 18px;
  color: ${props => props.theme.red};
`;

const Title = ({ children, icon, ...props }) => (
  <StyledTitle {...props}>
    <Icon name={icon} />
    { children }
  </StyledTitle>
);


Title.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Title;
