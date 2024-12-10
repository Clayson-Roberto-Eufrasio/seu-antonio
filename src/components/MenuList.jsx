// src/MenuList.jsx
import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const CardContainer = styled.div`
  background-color: transparent;
  padding: 20px;
`;

const ListContainer = styled.div`
  margin: auto;
`;

const MenuList = ({ items }) => {
  return (
    <CardContainer>
      <ListContainer className="section">
        {items.map((item, index) => (
          <div key={index}>
            <MenuItem item={item} />
          </div>
        ))}
      </ListContainer>
    </CardContainer>
  );
};

export default MenuList;
