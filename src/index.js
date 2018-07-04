import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// eslint-disable-next-line
const electron = window.require('electron');
const { ipcRenderer: ipc } = electron;

// eslint-disable-next-line
ReactDOM.render(<App ipc={ipc} />, document.getElementById('root'));
registerServiceWorker();
