// src/MenuList.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import ItemModal from './ItemModal';

const CardContainer = styled.div`
  background-color: transparent;
  padding: 20px;
  transition: opacity 0.5s ease-in-out;
`;

const ListContainer = styled.div`
  margin: auto;
`;


const MenuList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null); // Estado para armazenar o item selecionado
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade do modal

  // Função chamada ao clicar em um item da lista
  const handleItemClick = (item) => {
    setSelectedItem(item); // Define o item selecionado
    setIsModalOpen(false); // Abre o modal, para funcionar corretamete nescessario alterar para true
  };
  
    // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal
    setSelectedItem(null); // Limpa o item selecionado
  };

  return (
    <CardContainer>
      <ListContainer className='section'>
        {items.map((item, index) => (
          <div key={index} onClick={() => handleItemClick(item)}>
            <MenuItem
              key={index}
              item={item}
            />
          </div>
        ))}
      </ListContainer>
      {/* Componente ItemModal para exibir o item selecionado */}
      <ItemModal isOpen={isModalOpen} onRequestClose={closeModal} item={selectedItem} />
    </CardContainer>
  );
};

export default MenuList;
