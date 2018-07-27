import { actionTypes } from '../reducers/license';


export function validateLincese(payload) {
  return {
    type: actionTypes.VALIDATE_LICENSE_KEY_REQUEST,
    payload,
  };
}

export function validateLinceseSuccess(payload) {
  return {
    type: actionTypes.VALIDATE_LICENSE_KEY_SUCCESS,
    payload,
  };
}

export function validateLinceseFailure(payload) {
  return {
    type: actionTypes.VALIDATE_LICENSE_KEY_FAILURE,
    payload,
  };
}
