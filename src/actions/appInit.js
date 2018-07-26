export const actionTypes = {
  UI_READY: 'UI_READY',
};

export function uiReady() {
  return {
    type: actionTypes.UI_READY,
  };
}
