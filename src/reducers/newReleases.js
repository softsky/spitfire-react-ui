import immutable from 'seamless-immutable';

export const actionTypes = {
  FETCH_NEW_RELEASES_REQUEST: 'FETCH_NEW_RELEASES_REQUEST',
  FETCH_NEW_RELEASES_SUCCESS: 'FETCH_NEW_RELEASES_SUCCESS',
  FETCH_NEW_RELEASES_FAILURE: 'FETCH_NEW_RELEASES_FAILURE',
};

const INITIAL_STATE = immutable({
  isFetching: false,
  data: [],
});

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_NEW_RELEASES_REQUEST:
      return state
        .set('isFetching', true);

    case actionTypes.FETCH_NEW_RELEASES_SUCCESS:
      return state
        .set('isFetching', false)
        .set('data', action.payload);

    case actionTypes.FETCH_NEW_RELEASES_FAILURE:
      return state
        .set('isFetching', false)
        .set('error', action.error);

    default:
      return state;
  }
}
