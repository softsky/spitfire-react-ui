import React from 'react';
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

const Header = () => (
  <Container>
    <Title icon="rocket">
      Upcomming Release
    </Title>
    <Button primary icon="refresh" onClick={() => null}>
      Refresh
    </Button>
  </Container>
);

export default Header;
