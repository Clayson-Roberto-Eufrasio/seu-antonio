// src/MenuItem.jsx
import React from 'react';
import styled from 'styled-components';
import Flag from "react-world-flags"

const CardContainer = styled.div`
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.9);
  border-radius: 15px;
  margin-bottom: 20px;
  padding: 20px;
  transition: opacity 0.5s ease-in-out;
  cursor: pointer;

  .bodyOfItem {
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    color: black; 

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

const Title = styled.h3`
  text-align: center;
  font-size: 17px;
  line-height: 120%;
  font-weight: 800;
  margin-top: 4px;
`;

const Price = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  line-height: 120%;
  font-weight: 800;
  margin: 0px 10px;
`;

const Description = styled.p`
  margin: 0px 10px;
  font-size: 15px;
  font-weight: 500;
  line-height: 140%;
  word-break: break-word;
`;

const MenuItem = ({ item }) => {

  return (
    <CardContainer>
      <Title>{item.title}</Title>
      <div className='bodyOfItem'>
        {item.image_url ? (
          <img loading="lazy" src={item.image_url} alt={item.title} style={{ width: '100px', height: 'auto', borderRadius: '10px' }} />
        ) : (
          <></>
        )}
        <div>
          <Description>{item.description}</Description>
          <Price>R$ {item.value}</Price>
          <Flag code={item.state} style={{ width: 24, height: 17, marginLeft: 10, marginTop: 5 }}/>
        </div>
      </div>
    </CardContainer>
  );
};

export default MenuItem;
