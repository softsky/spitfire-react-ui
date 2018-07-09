import React from 'react';
import { css } from 'react-emotion';
import { flow } from 'lodash/fp';
import CreateTask from './CreateTask';
import CurrentTasks from './CurrentTasks';
import withTasks from '../../../containers/withTasks';


const containerCss = css`
  padding: 12px 10px;
  display: flex;
  flex: 1;
`;

const ManageTasks = props => (
  <div className={containerCss}>
    <CreateTask {...props} />
    <CurrentTasks {...props} />
  </div>
);

export default flow([
  withTasks,
])(ManageTasks);
