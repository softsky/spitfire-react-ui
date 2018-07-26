import { bindActionCreators } from 'redux';
import ipc from '../utils/ipc';
import { fetchNewReleasesSuccess } from '../actions/newReleases';


export default function initIpcs({ dispatch }) {
  const actions = bindActionCreators({ fetchNewReleasesSuccess }, dispatch);

  ipc.on('NEW_RELEASES', (event, data) => {
    actions.fetchNewReleasesSuccess(data);
  });
}
