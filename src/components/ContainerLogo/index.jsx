// src/components/ContainerLogo/index.jsx
import React, { useEffect, useRef, useState } from "react";
import { ContainerLogoStyled } from "./styles"
import HamburgerMenu from "../HamburgerMenu/index.jsx";

const ContainerLogo = ({category, setSelectedCategory}) => {
  const [isFixed, setIsFixed] = useState(false);
  const headerRef = useRef(null);
  const placeholderRef = useRef(null);

  const handleScroll = () => {
    if (headerRef.current && placeholderRef.current) {
      const headerTop = placeholderRef.current.getBoundingClientRect().top;
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
    <ContainerLogoStyled className='containerLogo'>
      <h2>Nosso Magnífico</h2>
      <h1>Cardápio</h1>
      <h3>de</h3>
      <div ref={placeholderRef}></div> {/* Placeholder div to maintain layout height */}
      <div ref={headerRef} className={isFixed ? 'fixed' : 'header-content'}>
        <div id="containerH2">
          <h2>{category}</h2>
        </div>
        <HamburgerMenu setSelectedCategory={setSelectedCategory} nameHanburguer={isFixed ? "fixedHamburguer" : "hamburger-menu"}/>
      </div>
    </ContainerLogoStyled>
  )
}

export default ContainerLogo