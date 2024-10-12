// src/components/Header.jsx
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import HeaderBackgroundContainer from './HeaderBackgroundContainer';
import ContainerLogo from './ContainerLogo';
import ContainerIcons from './ContainerIcons';
import HamburgerMenu from './HamburgerMenu';

const HeaderContainer = styled.header`
  background-color: transparent;
  color: #333;
  text-align: center;
  top: 0;
  z-index: 1000;

  .header-content {
    background-color: transparent;
  }

  .fixed {
    position: fixed !important;
    width: 100%;
    top: 0 !important;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
  }

  #containerH2 {
    background-color: #090909b8;
    padding-top: 11px;
    color: #f7f5f2;
    text-shadow: 2px 2px 5px black;
    height: 88px;
    font-size: 18px;
    margin-top: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Header = ({ category, setSelectedCategory }) => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const placeholderRef = useRef(null);

  const handleScroll = () => {
    if (headerRef.current && placeholderRef.current) {
      const headerTop = placeholderRef.current.getBoundingClientRect().top;
      console.log(headerTop <= 0)
      setIsFixed(headerTop <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderContainer id="header-container">
        <HeaderBackgroundContainer />
        <ContainerLogo />
        <ContainerIcons />
        <div ref={placeholderRef}></div> {/* Placeholder div to maintain layout height */}
        <div ref={headerRef} className={isFixed || isMenuOpen ? 'fixed' : 'header-content'}>
          <div id="containerH2">
            <h2>{category}</h2>
          </div>
          <HamburgerMenu setSelectedCategory={setSelectedCategory} nameHanburguer={isFixed || isMenuOpen ? "fixedHamburguer" : "hamburger-menu"} setIsMenuOpen={setIsMenuOpen}/>
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
