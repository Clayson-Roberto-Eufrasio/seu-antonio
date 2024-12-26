// src/MenuItem.jsx
import React from 'react';
import Flag from "react-world-flags"
import ItemModal from '../ItemModal';
import { useAuth } from '../contexts/AuthContext';
import { CardContainerStyled, Description, Price, Title } from './styles';

const MenuItem = ({ item }) => {
  const { stateModalOpen, thisIsItem } = useAuth()

  return (
    <>
      <CardContainerStyled onClick={() => { stateModalOpen( item ) }}>
        <Title>{ item.title }</Title>
        <div className='bodyOfItem'>
          { item.image_url ? (
            <img loading="lazy" 
                 src={ item.image_url } 
                 alt={ item.title } 
                 style={{ width: '100px', height: 'auto', borderRadius: '10px' }} />
          ) : (
            <></>
          )}
          <div>
            <Description>{ item.description }</Description>
            <Price>{ new Intl.NumberFormat( 'pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format( item.value )}</Price>
            <Flag code={ item.state } style={{ width: 24, height: 17, marginLeft: 10, marginTop: 5 }}/>
          </div>
        </div>
      </CardContainerStyled>
      <ItemModal item={ thisIsItem }/>
    </>
  );
};

export default MenuItem;