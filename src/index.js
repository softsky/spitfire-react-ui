import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import 'font-awesome/css/font-awesome.min.css';
import './index.css';


ReactDOM.render(
  // eslint-disable-next-line
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line
  document.getElementById('root'),
);

registerServiceWorker();
