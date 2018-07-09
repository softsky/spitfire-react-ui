/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styled from 'react-emotion';
import FontAwesome from 'react-fontawesome';


const Container = styled('div')`
  margin: 0 33px 0 21px;
  text-align: left;
  cursor: pointer;
  position: relative;
  user-select: none;
  border-radius: 50px;
  transition: opacity 0.3s;
  background: ${props => (props.isActive ? '#fd4a45' : 'transparent')};
  padding: ${props => (props.isActive ? '15px' : '10px 15px')};

  &:hover {
    opacity: ${props => (props.isActive ? 0.7 : 1)};
  }
`;

const StyledLink = styled(Link)`
  color: ${props => (props.isActive ? '#ffffff' : props.theme.sideBarTextColor)};
  width: 100%;
  text-decoration: none;
  padding-left: 10px;
  font-family: 'MontserratSemiBold';
  font-size: 1;
`;

const Icon = styled(FontAwesome)`
  font-size: 16px;
  color: ${props => (props.isActive ? '#ffffff' : props.theme.red)};
`;

const Arrow = styled('i')`
  background: url(${require('./img/arrow.svg')});
  height: 68px;
  display: ${props => (props.show ? 'block' : 'none')};
  width: 100px;
  right: -90px;
  top: -26px;
  position: absolute;
  background-size: cover;
`;

const MenuItem = (props) => {
  const {
    location,
    path,
    title,
    icon,
  } = props;

  const { pathname } = location;
  const isActive = pathname === path;

  return (
    <Container isActive={isActive}>
      <Icon name={icon} isActive={isActive} />
      <StyledLink to={path} isActive={isActive}>
        { title }
      </StyledLink>
      <Arrow show={isActive} />
    </Container>
  );
};

MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(MenuItem);
