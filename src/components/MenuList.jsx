// src/MenuList.jsx
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const CardContainer = styled.div`
  background-color: transparent;
  padding: 20px;
  transition: opacity 0.5s ease-in-out;
`;

const ListContainer = styled.div`
  margin: auto;
`;

const ItemWrapper = styled.div`
  opacity: 0;
  filter: blur(15px);
  transform: translateX(-100%);
  transition: opacity 0.5s ease, filter 0.5s ease, transform 0.5s ease;

  &.visible {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }
`;

const MenuList = ({ items }) => {
  const refs = useRef([]); // Refs para os itens

  // Função de callback para o IntersectionObserver simplificada
  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Adiciona a classe 'visible' ao elemento
      } else {
        entry.target.classList.remove("visible"); // Remove a classe 'visible' ao elemento
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0 // Define um threshold para considerar o item como visível
    });

    const elements = refs.current;
    elements.forEach(element => {
      if (element) {
        observer.observe(element); // Observa cada elemento
      }
    });

    return () => {
      elements.forEach(element => {
        if (element) {
          observer.unobserve(element); // Cancela a observação ao desmontar
        }
      });
    };
  }, [items]);

  return (
    <CardContainer>
      <ListContainer className='section'>
        {items.map((item, index) => (
          <ItemWrapper
            ref={el => refs.current[index] = el} // Adiciona a ref ao elemento
            key={index}
            data-title={item.title} // Adiciona um atributo data-title para identificar o item
          >
            <MenuItem
              key={index}
              item={item}
            />
          </ItemWrapper>
        ))}
      </ListContainer>
    </CardContainer>
  );
};

export default MenuList;
