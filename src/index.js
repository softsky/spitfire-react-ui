import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  // eslint-disable-next-line
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line
  document.getElementById('root'),
);

registerServiceWorker();
