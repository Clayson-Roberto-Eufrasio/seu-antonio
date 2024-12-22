// src/components/ItemModal.jsx
import React from 'react';
import Modal from 'react-modal';
import { useAuth } from '../contexts/AuthContext';
import { BodyModal } from './styles';

// Estilos personalizados para o modal
const customStyles = {
    content: {
      top: '50%', // Centraliza o modal verticalmente
      left: '50%', // Centraliza o modal horizontalmente
      right: 'auto', // Desativa o ajuste automático do lado direito
      bottom: 'auto', // Desativa o ajuste automático da parte inferior
      marginRight: '-50%', // Ajuste necessário para a centralização
      transform: 'translate(-50%, -50%)', // Move o modal para centralizá-lo
      padding: '20px', // Adiciona padding interno
      backgroundColor: '#fff', // Cor de fundo do conteúdo do modal
      borderRadius: '10px', // Adiciona bordas arredondadas
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adiciona sombra
    },
    overlay: {
      zIndex: 8000,
      backgroundColor: 'rgba(0, 0, 0, 0.75)' // Cor de fundo do overlay (fundo)
    }
};

// Componente ItemModal para exibir os detalhes do item selecionado em um modal
const ItemModal = ({ item }) => {
  const { isOpen, stateModalClose } = useAuth()

  if (!item) return null; // Se nenhum item estiver selecionado, não renderiza o modal

  return (
    <Modal
      isOpen={isOpen} // Controla se o modal está aberto
      onRequestClose={stateModalClose} // Função para fechar o modal
      contentLabel="Item Details" // Rótulo para acessibilidade
      ariaHideApp={false} // Desativa a ocultação da aplicação principal (necessário para evitar erros de acessibilidade)
      style={customStyles} // Aplica os estilos personalizados
    >
      <BodyModal>
        <div>
          <h1>{item.title}</h1>
          <button onClick={stateModalClose}>X</button>
        </div>
        <p>{item.description}</p>
        <img src={item.image_url} alt={item.title} />
      </BodyModal>
    </Modal>
  );
};

export default ItemModal;
