import { bindActionCreators } from 'redux';
import ipc from '../utils/ipc';
import * as licenseActions from '../actions/license';
import * as releasesActions from '../actions/newReleases';


export default function initIpcs({ dispatch }) {
  const actions = bindActionCreators({
    ...licenseActions,
    ...releasesActions,
  }, dispatch);

  ipc.on('NEW_RELEASES_SUCCESS', (event, data) => {
    actions.fetchNewReleasesSuccess(data);
  });

  ipc.on('NEW_RELEASES_FAILURE', (event, error) => {
    actions.fetchNewReleasesFailure(error);
  });

  ipc.on('VALIDATE_LICENSE_KEY_SUCCESS', (event, data) => {
    actions.validateLinceseSuccess(data);
  });

  ipc.on('VALIDATE_LICENSE_KEY_FAILURE', (event, error) => {
    actions.validateLinceseFailure(error);
  });
}
