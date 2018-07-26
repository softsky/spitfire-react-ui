import { bindActionCreators } from 'redux';
import ipc from '../utils/ipc';
import {
  fetchNewReleasesSuccess,
  fetchNewReleasesFailure,
} from '../actions/newReleases';


export default function initIpcs({ dispatch }) {
  const actions = bindActionCreators({
    fetchNewReleasesSuccess,
    fetchNewReleasesFailure,
  }, dispatch);

  ipc.on('NEW_RELEASES_SUCCESS', (event, data) => {
    actions.fetchNewReleasesSuccess(data);
  });

  ipc.on('NEW_RELEASES_FAILURE', (event, error) => {
    actions.fetchNewReleasesFailure(error);
  });
}
