import React, { Component } from 'react';
import logo from './logo.svg';
import Nav1 from './Navs/Nav1.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Nav1 items={['Home', 'Services', 'About', 'Contact us']} />
      </div>
    );
  }
}

export default App;
