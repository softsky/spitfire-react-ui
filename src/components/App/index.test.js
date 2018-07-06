import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import App from './index';


// eslint-disable-next-line
it('renders without crashing', () => {
  // eslint-disable-next-line
  const div = document.createElement('div');

  ReactDOM.render(
    // eslint-disable-next-line
    <Provider store={store}>
      <App />
    </Provider>,
    div,
  );


  ReactDOM.unmountComponentAtNode(div);
});
