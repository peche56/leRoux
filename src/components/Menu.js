import React, {Component} from 'react';
import styled from 'styled-components';

class Menu extends Component {

state = { menuWidth: 0}
openMenu = () => {
  this.setState({menuWidth: 250});
}
closeMenu = () => {
  this.setState({menuWidth: 0});
}

render(){
  // const Div = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   align-content: center;
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   width: ${this.state.menuWidth}px;
  // `;

  const Button = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 80px;
    background-color: gold;
    color: black;
    margin: 20px auto;
    padding: 20px;
    transition: 0.2s ease 0.2s;
    cursor: pointer;
    &:hover {
      background-color: yellow;
      color: #bada55;
    }
  `;

  const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  position: absolute;
  top: 0;
  right: 0;
  background-color: purple;
  width: ${this.state.menuWidth}px;
  height: 100vh;
  overflow-x: hidden;
  transition: all 0.5s;
  -webkit-transition: all 0.25s;
      `;

  return(
    <div>
      <Button
        onClick={this.openMenu}>
        Menu
      </Button>
      <Section>
        <button
          onClick={this.closeMenu}>
          X
        </button>
        <h2>Menu</h2>
        <ul>
          <li>Accueil</li>
          <li>Nos produits</li>
          <li>Suggestions du moment</li>
          <li>Conseilles</li>
          <li>Contact</li>
      </ul>
    </Section>

  </div>
  )}
}
export default Menu;
