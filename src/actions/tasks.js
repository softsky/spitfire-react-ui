import { actionTypes } from '../reducers/tasks';

export function addTask(payload) {
  return {
    type: actionTypes.ADD_TASK,
    payload,
  };
}
