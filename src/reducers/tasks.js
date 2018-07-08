import immutable from 'seamless-immutable';

export const actionTypes = {
  ADD_TASK: 'ADD_TASK',
  REMOVE_TASK: 'REMOVE_TASK',
};

const INITIAL_STATE = immutable({
  data: [],
});

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return state
        .update('data', data => data.concat(action.payload));

    case actionTypes.REMOVE_TASK:
      return state
        .update('data', data => data.filter(task => task.id !== action.payload));

    default:
      return state;
  }
}
