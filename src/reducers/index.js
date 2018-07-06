import { combineReducers } from 'redux';
import newReleases from './newReleases';

const reducers = {
  newReleases,
};

export default combineReducers(reducers);
