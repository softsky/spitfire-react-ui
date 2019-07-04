import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store/create';
import App from './components/App';
import Welcome from './windows/Welcome';
import registerServiceWorker from './registerServiceWorker';
import initIpcs from './ipcs';

import 'font-awesome/css/font-awesome.min.css';
import './index.css';

const store = createStore();
initIpcs(store);

const Component = process.env.REACT_APP_WINDOW === 'welcome'
  ? Welcome
  : App;

ReactDOM.render(
  // eslint-disable-next-line
  <Provider store={store}>
    <Component />
  </Provider>,
  // eslint-disable-next-line
  document.getElementById('root'),
);

registerServiceWorker();
