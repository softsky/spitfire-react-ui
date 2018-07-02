import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const electron = window.require('electron');
const { ipcRenderer: ipc } = electron;


ReactDOM.render(<App ipc={ipc} />, document.getElementById('root'));
registerServiceWorker();
