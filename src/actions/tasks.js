import uniqueId from 'lodash/uniqueId';
import { actionTypes } from '../reducers/tasks';


export function addTask(payload) {
  return {
    type: actionTypes.ADD_TASK,
    payload: Object.assign({ id: uniqueId() }, payload),
  };
}

export function removeTask(id) {
  return {
    type: actionTypes.REMOVE_TASK,
    payload: id,
  };
}

export function runTask(payload) {
  return {
    type: actionTypes.RUN_TASK,
    payload,
  };
}

export function updateTask(payload) {
  return {
    type: actionTypes.UPDATE_TASK,
    payload,
  };
}
