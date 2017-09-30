import React, {Component} from 'react';
import Menu from './Menu';
import logo from '../img/lyann-logo.svg';
import '../App.css';

const Header = () =>{
  return(
  <div>
  <Menu />
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
  </div>
</div>
)
}
export default Header;
