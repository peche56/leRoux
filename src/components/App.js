import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../App.css';
import SeasonProducts from './SeasonProducts';
import Menu from './Menu';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <SeasonProducts />

      </div>
    );
  }
}

export default App;
