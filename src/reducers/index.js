import { combineReducers } from 'redux';
import newReleases from './newReleases';
import tasks from './tasks';
import license from './license';


const reducers = {
  newReleases,
  tasks,
  license,
};

export default combineReducers(reducers);
