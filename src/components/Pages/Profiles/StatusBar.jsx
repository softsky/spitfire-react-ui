import React from 'react';
import styled from 'react-emotion';


const Container = styled('div')`
  display: flex;
  margin-top: 40px;
  margin-bottom: 30px;
`;

const Status = styled('div')`
  flex: 1;
  border-bottom: 2px solid #ffffff;
  opacity: ${props => (props.completed ? 0.5 : 0.3)}
`;

const StatusBar = () => (
  <Container>
    <Status completed />
    <Status />
    <Status />
  </Container>
);

export default StatusBar;
