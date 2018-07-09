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

const Actions = ({ removeTask, id }) => (
  <Root>
    <Icon name="play-circle-o" />
    <Icon name="stop-circle-o" />
    <Icon name="times-circle-o" onClick={() => removeTask(id)} />
  </Root>
);

Actions.propTypes = {
  removeTask: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Actions;
