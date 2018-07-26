import { takeEvery, fork, all } from 'redux-saga/effects';
import ipc from '../utils/ipc';
import { actionTypes as appActionTypes } from '../actions/appInit';
import { actionTypes as releasesActionTypes } from '../reducers/newReleases';


function* takeUiReady() {
  yield takeEvery(
    appActionTypes.UI_READY,
    () => ipc.send('UI_READY'),
  );
}

function* takeNewReleases() {
  yield takeEvery(
    releasesActionTypes.FETCH_NEW_RELEASES_REQUEST,
    () => ipc.send('FETCH_NEW_RELEASES'),
  );
}

export default function* () {
  yield all([
    fork(takeUiReady),
    fork(takeNewReleases),
  ]);
}
