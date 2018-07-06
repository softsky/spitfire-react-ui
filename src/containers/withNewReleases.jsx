import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/newReleases';

function mapStateToProps(state) {
  return {
    ...state.newReleases,
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
    newReleases: {
      ...dispatchProps,
      ...stateProps,
    },
  };
}

export default function withAuth(Component) {
  return connect(mapStateToProps, mapDispatchToProps, mergeProps)(props => (
    <Component {...props} />
  ));
}
