import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/license';

function mapStateToProps(state) {
  return {
    ...state.license,
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
    license: {
      ...dispatchProps,
      ...stateProps,
    },
  };
}

export default function withLicense(Component) {
  return connect(mapStateToProps, mapDispatchToProps, mergeProps)(props => (
    <Component {...props} />
  ));
}
