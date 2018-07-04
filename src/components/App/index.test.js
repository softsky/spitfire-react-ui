import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';


// eslint-disable-next-line
it('renders without crashing', () => {
  // eslint-disable-next-line
  const div = document.createElement('div');

  const props = {
    ipc: {
      // we can test it as well
      on: () => null,
      send: () => null,
      removeListener: () => null,
    },
  };

  // eslint-disable-next-line
  ReactDOM.render(<App {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
