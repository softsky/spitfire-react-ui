import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/tasks';

function mapStateToProps(state) {
  return {
    ...state.tasks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    tasks: {
      ...dispatchProps,
      ...stateProps,
    },
  };
}

export default function withTasks(Component) {
  return connect(mapStateToProps, mapDispatchToProps, mergeProps)(props => (
    <Component {...props} />
  ));
}
