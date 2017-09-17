import React, {Component} from 'react';
import styled from 'styled-components';

class Menu extends Component {

state = { toggleMenu: false}
toggleMenu = () => {
  console.log(this.state);
  this.setState({toggleMenu: !this.state.toggleMenu});
}


render(){
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    position: absolute;
    top: 0;
    right: 0;
    width 250px;
  `;

  const Button = styled.div`

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
  background-color: purple;
  `;

  return(
    <Div>
      <Button
        onClick={this.toggleMenu}>
        Menu
      </Button>
      {this.state.toggleMenu &&
      <Section>
        <h2>Menu</h2>
        <ul>
          <li>Accueil</li>
          <li>Nos produits</li>
          <li>Suggestions du moment</li>
          <li>Conseilles</li>
          <li>Contact</li>
      </ul>
    </Section>
    }
  </Div>
  )}
}
export default Menu;
