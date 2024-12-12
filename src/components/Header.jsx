// src/components/Header.jsx
import React from 'react';
import styled from 'styled-components';
import ContainerLogo from './ContainerLogo';

const HeaderContainer = styled.header`
  background-color: transparent;
  color: #333;
  text-align: center;
  top: 0;
  z-index: 1000;


`;

const Header = ({ category, setSelectedCategory }) => {


  return (
    <>
      <HeaderContainer id="header-container">
        <ContainerLogo category={category} setSelectedCategory={setSelectedCategory}/>
      </HeaderContainer>
    </>
  );
};

export default Header;
