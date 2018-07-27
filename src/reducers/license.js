import immutable from 'seamless-immutable';

export const actionTypes = {
  VALIDATE_LICENSE_KEY_REQUEST: 'VALIDATE_LICENSE_KEY_REQUEST',
  VALIDATE_LICENSE_KEY_SUCCESS: 'VALIDATE_LICENSE_KEY_SUCCESS',
  VALIDATE_LICENSE_KEY_FAILURE: 'VALIDATE_LICENSE_KEY_FAILURE',
};

const INITIAL_STATE = immutable({
  isFetching: false,
  isValid: null,
  licenceKey: null,
  error: null,
});

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.VALIDATE_LICENSE_KEY_REQUEST:
      return state
        .set('isFetching', true)
        .set('error', null)
        .set('licenceKey', action.payload);

    case actionTypes.VALIDATE_LICENSE_KEY_SUCCESS:
      return state
        .set('isFetching', false)
        .set('isValid', true);

    case actionTypes.VALIDATE_LICENSE_KEY_FAILURE:
      return state
        .set('isFetching', false)
        .set('error', action.error || 'Unknown error')
        .set('isValid', false);

    default:
      return state;
  }
}
