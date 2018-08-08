import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import FontAwesome from 'react-fontawesome';

const Root = styled('div')`
  display: flex;
`;

const Icon = styled(FontAwesome)`
  margin-right: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: opacity .3s;

  &:hover { opacity: .7; }
`;

// TODO: for now we keep all tasks just in memory,
// but we have to store them somewhere on the BE
const Actions = ({ removeTask, runTask, ...task }) => (
  <Root>
    <Icon name="play-circle-o" onClick={() => runTask(task)} />
    <Icon name="stop-circle-o" />
    <Icon name="times-circle-o" onClick={() => removeTask(task.id)} />
  </Root>
);

Actions.propTypes = {
  removeTask: PropTypes.func.isRequired,
  runTask: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Actions;
