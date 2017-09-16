import React, {Component} from 'react';

class Menu extends Component {

state = { toggleMenu: false}
toggleMenu = () => {
  console.log(this.state);
  this.setState({toggleMenu: !this.state.toggleMenu});
}

render(){
  return(
    <div>
      <button
        onClick={this.toggleMenu}>
        Menu
      </button>
      {this.state.toggleMenu &&
      <div>
        <h2>Menu</h2>
        <ul>
          <li>Accueil</li>
          <li>Nos produits</li>
          <li>Suggestions du moment</li>
          <li>Conseilles</li>
          <li>Contact</li>
      </ul>
      </div>
    }
    </div>
  )}
}
export default Menu;
