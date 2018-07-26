import { actionTypes } from '../reducers/newReleases';

export function fetchNewReleases() {
  return {
    type: actionTypes.FETCH_NEW_RELEASES_REQUEST,
  };
}

export function fetchNewReleasesSuccess(payload) {
  return {
    type: actionTypes.FETCH_NEW_RELEASES_SUCCESS,
    payload,
  };
}

export function fetchNewReleasesFailure(error) {
  return {
    type: actionTypes.FETCH_NEW_RELEASES_FAOLURE,
    error,
  };
}
