import {
  takeEvery,
  fork,
  all,
  put,
} from 'redux-saga/effects';
import ipc from '../utils/ipc';
import { validateLincese } from '../actions/license';
import { actionTypes as appActionTypes } from '../actions/appInit';
import { actionTypes as licenseActionTypes } from '../reducers/license';
import { actionTypes as releasesActionTypes } from '../reducers/newReleases';


function* handleUiReady() {
  ipc.send('UI_READY');
  yield put(validateLincese());
}

function* takeUiReady() {
  yield takeEvery(appActionTypes.UI_READY, handleUiReady);
}

function* takeNewReleases() {
  yield takeEvery(
    releasesActionTypes.FETCH_NEW_RELEASES_REQUEST,
    () => ipc.send('FETCH_NEW_RELEASES'),
  );
}

function* takeLicenceKey() {
  yield takeEvery(
    licenseActionTypes.VALIDATE_LICENSE_KEY_REQUEST,
    action => ipc.send('VALIDATE_LICENSE_KEY', action.payload),
  );
}

export default function* () {
  yield all([
    fork(takeUiReady),
    fork(takeNewReleases),
    fork(takeLicenceKey),
  ]);
}
