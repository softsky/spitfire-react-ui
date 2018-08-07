import {
  takeEvery,
  fork,
  all,
  put,
} from 'redux-saga/effects';

import ipc from '../utils/ipc';

import { actionTypes as appActionTypes } from '../actions/appInit';
import { actionTypes as licenseActionTypes } from '../reducers/license';
import { actionTypes as releasesActionTypes } from '../reducers/newReleases';
import { actionTypes as tasksActionTypes } from '../reducers/tasks';

import * as tasksActions from '../actions/tasks';


function* takeUiReady() {
  yield takeEvery(appActionTypes.UI_READY, () => ipc.send('UI_READY'));
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

function* handleRunTask({ payload }) {
  ipc.send('RUN_TASK', payload);

  const task = {
    ...payload,
    status: 'pending',
  };

  yield put(tasksActions.updateTask(task));
}

function* takeRunTask() {
  yield takeEvery(
    tasksActionTypes.RUN_TASK,
    handleRunTask,
  );
}

export default function* () {
  yield all([
    fork(takeUiReady),
    fork(takeNewReleases),
    fork(takeLicenceKey),
    fork(takeRunTask),
  ]);
}
