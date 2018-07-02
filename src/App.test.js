import React from 'react';
import ReactDOM from 'react-dom';
import jest from 'jest';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');

  const props = {
    ipc: {
      // we can test it as well
      on: () => null,
      send: () => null,
      removeListener: () => null,
    }
  }
  
  ReactDOM.render(<App { ...props }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
