import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static propTypes = {
    ipc: PropTypes.object,
  }
  
  state = {
    message: '',
  }
  
  componentDidMount() {
    // TODO: remove this right after start using redux & redux-saga
    this.props.ipc.on('PONG', this.handleMessage)
  }

  componentWillUnmount() {
    this.props.ipc.removeListener('PONG', this.handleMessage)
  }

  handleMessage = (event, payload) => {
    this.setState({
      message: `timestamp: ${payload}`,
    });
  }

  handlePingBE = () => {
    this.props.ipc.send('PING', { date: new Date() });
  }
  
  render() {
    const { message } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          { message }
        </p>
        <button onClick={this.handlePingBE}>
          ping BE
        </button>
      </div>
    );
  }
}

export default App;
