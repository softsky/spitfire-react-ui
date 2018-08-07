import React from 'react';
import styled from 'react-emotion';
import { flow } from 'lodash/fp';
import CreateTask from './CreateTask';
import CurrentTasks from './CurrentTasks';
import withTasks from '../../../containers/withTasks';


const Container = styled('div')`
  padding: 12px 10px;
  display: flex;
  flex: 1;
`;

const ManageTasks = props => (
  <Container>
    <CreateTask {...props} />
    <CurrentTasks {...props} />
  </Container>
);

export default flow([
  withTasks,
])(ManageTasks);
