/* globals window */

// we need it in case we should render components outside the Electron,
// for example jest
export const mockIpc = {
  send: () => null,
  on: () => null,
};

function getIpc() {
  try {
    const electron = window.require('electron');
    return electron.ipcRenderer;
  } catch (error) {
    return mockIpc;
  }
}

export default getIpc();
