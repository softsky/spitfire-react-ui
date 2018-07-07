import { combineReducers } from 'redux';
import newReleases from './newReleases';
import tasks from './tasks';

const reducers = {
  newReleases,
  tasks,
};

export default combineReducers(reducers);
