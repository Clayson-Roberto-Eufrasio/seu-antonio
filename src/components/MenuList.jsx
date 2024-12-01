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

const ItemWrapper = styled.div`
  /* Removidos os estilos de animação */
`;

const MenuList = ({ items }) => {
  return (
    <CardContainer>
      <ListContainer className="section">
        {items.map((item, index) => (
          <ItemWrapper key={index}>
            <MenuItem item={item} />
          </ItemWrapper>
        ))}
      </ListContainer>
    </CardContainer>
  );
};

export default MenuList;
