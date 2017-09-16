import React, {Component} from 'react';
import logo from '../img/logo.svg';

const SeasonProductCard = () => {
  return(
    <div>
   <img src={logo} alt="logo"  />
      <div>
        <h3>title</h3>
        <p>description blablabla</p>
          <button>more</button>
      </div>
    </div>
  )
}
export default SeasonProductCard;
