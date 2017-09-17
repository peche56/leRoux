import React, {Component} from 'react';
import pourpier from '../img/pourpier.jpg';
import flowers from '../datas/flowers';
import styled from 'styled-components';

const SeasonProductCard = () => {

const Section = styled.div`
  margin: 10px;
  padding: 10px;
  font-family: 'Raleway', sans-serif;
  width: 300px;
  border: solid 1px grey;
  border-radius: 5px;
  box-shadow: 3px 2px 2px #888888;
`;

const Div = styled.div`
height: 200px;
background-image: url(${pourpier});
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
    <Section>
      <Div>
      </Div>
      <div>
        <h3>{flowers[0].name}</h3>
        <p>{flowers[0].description}</p>
          <Button>more</Button>
      </div>
    </Section>
  )
}
export default SeasonProductCard;
