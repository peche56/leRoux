import React, {Component} from 'react';
import pourpier from '../img/pourpier.jpg';
import styled from 'styled-components';

const SeasonProductCard = () => {

const Div = styled.div`
  margin: 10px;
  font-family: 'Raleway', sans-serif;
  width: 200px;
  border: solid 1px grey;
  border-radius: 5px;
  box-shadow: 3px 2px 2px #888888;
`;

const Img = styled.div`
overflow: hidden;

`;

const Button = styled.div`
color: #888888;
margin: 10px auto;
border: solid 1px #888888;
border-radius: 2px;
width: 80px;
transition: 0.2s ease 0.2s;
cursor: pointer;
&:hover {
  box-shadow: 2px 1px 1px #888888;
  transform: rotate(5deg);
}
`;

  return(
    <Div>
   <Img src={pourpier} alt="pourpier"  />
      <div>
        <h3>pourpier</h3>
        <p>description blablabla</p>
          <Button>more</Button>
      </div>
    </Div>
  )
}
export default SeasonProductCard;
