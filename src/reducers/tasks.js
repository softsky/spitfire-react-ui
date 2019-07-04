import immutable from 'seamless-immutable';

export const actionTypes = {
  ADD_TASK: 'ADD_TASK',
  REMOVE_TASK: 'REMOVE_TASK',
  RUN_TASK: 'RUN_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
};

const INITIAL_STATE = immutable({
  data: [],
});

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case actionTypes.ADD_TASK:
      return state
        .update('data', data => data.concat(payload));

    case actionTypes.REMOVE_TASK:
      return state
        .update('data', data => data.filter(task => task.id !== payload));

    case actionTypes.UPDATE_TASK:
      return state
        .update('data', data => data.map(task => (
          task.id === payload.id
            ? { ...task, ...payload }
            : task
        )));

    default:
      return state;
  }
}
