import React, {Component} from 'react';
import styled from 'styled-components';
import '../App.css';

class Menu extends Component {

state = { menuWidth: 0}
openMenu = () => {
  this.setState({menuWidth: 250});
}
closeMenu = () => {
  this.setState({menuWidth: 0});
}

render(){

  const Button = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 80px;
    background-color: transparent;
    color: #55362c;
    margin: 20px auto;
    padding: 20px;
    transition: 0.3s ease 0.2s;
    cursor: pointer;
    &:hover {
      color: #FFF1C4;
    }
  `;

  const MenuHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-item: center;
    background-color: #77CA6B;
    margin-bottom: 20px;

  `;

const MenuTiltle = styled.div`
  text-align: center;
  margin-top: 20px;
  padding-right: 50px;
  color: #FFF1C4;
`;

  const Close = styled.div`

    width: 50px;
    background-color: gold;
    color: #FF985D;
    font-size: 20px;
    padding: 20px;
    transition: 0.2s ease 0.2s;
    cursor: pointer;
    &:hover {
      background-color: yellow;
      color: #000;
    }
  `;

  const Section = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #5FAD38;
  width: ${this.state.menuWidth}px;
  height: 100vh;
  overflow-x: hidden;
  transition: all 0.5s;
  -webkit-transition: all 0.25s;
  box-shadow: -2px 2px 2px #55362c;
      `;

  const MenuList = styled.ul`
      padding: 0px;
      color: #55362c;
      list-style-type: none;
  `;

  const MenuItem = styled.li`
padding: 10px 0 10px 40px;
text-align: left;
display: block;
  `;

  return(
    <div>
      <Button
        onClick={this.openMenu}>
        Menu
      </Button>
      <Section>
        <MenuHeader>
        <MenuTiltle>Menu</MenuTiltle>
        <Close
          onClick={this.closeMenu}>
          X
        </Close>
      </MenuHeader>
        <MenuList>
          <MenuItem>Accueil</MenuItem>
          <MenuItem>Nos produits</MenuItem>
          <MenuItem>Suggestions du moment</MenuItem>
          <MenuItem>Conseilles</MenuItem>
          <MenuItem>Contact</MenuItem>
      </MenuList>
    </Section>

  </div>
  )}
}
export default Menu;
