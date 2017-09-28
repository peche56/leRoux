import React from 'react';
import styled from 'styled-components';
import SeasonProductCard from './SeasonProductCard';

const SeasonProducts = () =>{

  const SectionTitle = styled.div`
  color: #55362c;
  font-size: 24px;
  text-align: left;
  padding-left: 20px
  `
  const SectionSubTitle = styled.div`
  color: #55362c;
  font-size: 16px;
  text-align: left;
  padding-left: 20px
  `
  const SeasonProductsCollection = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  `
  const SelectBtn = styled.div`
  vertical-align: middle;
  `

  return(
  <div>
    <SectionTitle>à planter en ce momment</SectionTitle>
    <SectionSubTitle>subtitle blablabla</SectionSubTitle>
    <SeasonProductsCollection>
      <SelectBtn>prev</SelectBtn>
      <SeasonProductCard />
      <SelectBtn>next</SelectBtn>
    </SeasonProductsCollection>
  </div>
)}
export default SeasonProducts;
