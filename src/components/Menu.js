import React, {Component} from 'react';
import styled from 'styled-components';
import '../App.css';

class Menu extends Component {

state = { menuWidth: 0,
          menuList: ['Accueil', 'Nos produits', 'Suggestions du moment', 'Conseilles', 'Contact'
        ],
        }
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
    width: 50px;
    font-size: 20px;
    color: #6EBA0B;
    padding: 20px;
    background-color: #55362c;
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
  font-size: 20px;
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
padding: 20px 0 20px 40px;
text-align: left;
display: block;
  `;

  const Separator = styled.div`
border-top: 1px solid #55362c;
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
          {this.state.menuList.map(
            (item, i) =>
            <div>
              <MenuItem
                key={ i }><a>{item}</a>
              </MenuItem>
                <Separator></Separator>
            </div>
          )}
      </MenuList>
    </Section>

  </div>
  )}

}
export default Menu;
