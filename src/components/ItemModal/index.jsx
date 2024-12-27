// src/components/ItemModal.jsx
import React from 'react';
import Modal from 'react-modal';
import { useAuth } from '../contexts/AuthContext';
import { BodyModal } from './styles';

// Estilos personalizados para o modal
const customStyles = {
    content: {
      top: '50%', 
      left: '50%', 
      right: 'auto', 
      bottom: 'auto', 
      marginRight: '-50%', 
      transform: 'translate(-50%, -50%)', 
      padding: '20px', 
      backgroundColor: '#fff', 
      borderRadius: '10px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
    },
    overlay: {
      zIndex: 8000,
      backgroundColor: 'rgba(0, 0, 0, 0.75)' 
    }
};

// Componente ItemModal para exibir os detalhes do item selecionado em um modal
const ItemModal = ({ item }) => {
  const { isOpenModal, stateModalClose } = useAuth()

  if ( !item ) return null; // Se nenhum item estiver selecionado, não renderiza o modal

  return (
    <Modal
      isOpen={ isOpenModal } // Controla se o modal está aberto
      onRequestClose={ stateModalClose } // Função para fechar o modal
      contentLabel="Item Details" // Rótulo para acessibilidade
      ariaHideApp={ false } // Desativa a ocultação da aplicação principal (necessário para evitar erros de acessibilidade)
      style={ customStyles } // Aplica os estilos personalizados
    >
      <BodyModal>
        <div>
          <h1>{ item.title }</h1>
          <button onClick={ stateModalClose }>X</button>
        </div>
        <p>{ item.description }</p>
        <img src={ item.image_url } alt={ item.title } />
      </BodyModal>
    </Modal>
  );
};

export default ItemModal;
