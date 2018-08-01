import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Title from './Title';
import Button from '../../UI/Button';


const Container = styled('div')`
  display: flex;
  padding: 0 5px;
  align-items: center;
  height: 80px;
  user-select: none;
`;

const Header = ({ onClick }) => (
  <Container>
    <Title icon="rocket">
      Upcomming Release
    </Title>
    <Button primary icon="refresh" onClick={onClick}>
      Refresh
    </Button>
  </Container>
);

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Header;
