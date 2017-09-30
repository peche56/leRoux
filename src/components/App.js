import React, { Component } from 'react';
import '../App.css';
import SeasonProducts from './SeasonProducts';
import Menu from './Menu';
class App extends Component {
  render() {
    return (
      <div className="App">

        <p className="App-intro">
          Welcome to our new website blablabla.
        </p>

        <SeasonProducts />

      </div>
    );
  }
}

export default App;
