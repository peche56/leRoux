import React, { Component } from 'react';
import logo from '../img/lyann-logo.svg';
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
        </div>
        <p className="App-intro">
          Welcome to our new website blablabla.
        </p>

        <SeasonProducts />

      </div>
    );
  }
}

export default App;
