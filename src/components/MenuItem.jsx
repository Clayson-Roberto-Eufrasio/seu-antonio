// src/MenuItem.jsx
import React from 'react';
import styled from 'styled-components';
import Flag from "react-world-flags"

const CardContainer = styled.div`
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.9);
  background-color: #0303038a;
  border-radius: 15px;
  margin-bottom: 20px;
  padding: 20px;
  transition: opacity 0.5s ease-in-out;
  cursor: pointer;
`;

const Title = styled.h3`
  font-size: 15px;
  line-height: 120%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  color: white; 
  text-shadow: 2px 2px 5px black;
`;

const Price = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  line-height: 120%;
  font-weight: 800;
  color: white;
  text-shadow: 2px 2px 5px black;
`;

const Description = styled.p`
  font-size: 13px;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 140%;
  word-break: break-word;
  color: white;
  text-shadow: 2px 2px 5px black;
`;

const MenuItem = ({ item }) => {

  return (
    <CardContainer>
      <Title>{item.title}</Title>
      {item.image_url ? (
        <img src={item.image_url} alt={item.title} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
      ) : (
        <></>
      )}
      <Description>{item.description}</Description>
      <Flag code={item.state} style={{ width: 24, height: 17}}/>
      <Price>R$ {item.value}</Price>
    </CardContainer>
  );
};

export default MenuItem;
