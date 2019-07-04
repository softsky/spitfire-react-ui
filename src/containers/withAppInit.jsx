import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/appInit';


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    appInit: {
      ...dispatchProps,
      ...stateProps,
    },
  };
}

export default function withNewReleases(Component) {
  return connect(null, mapDispatchToProps, mergeProps)(props => (
    <Component {...props} />
  ));
}
