import immutable from 'seamless-immutable';

export const actionTypes = {
  ADD_TASK: 'ADD_TASK',
};

const INITIAL_STATE = immutable({
  data: [],
});

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return state
        .update('data', data => data.concat(action.payload));

    default:
      return state;
  }
}
