import React, { useEffect, useRef, useState } from "react";
import { ContainerLogoStyled } from "./styles"
import HamburgerMenu from "../HamburgerMenu/index.jsx";
import { useAuth } from "../contexts/AuthContext.jsx"
import LogoSeuAntonio from "../../images/logoSeuAntonio.webp"

const ContainerLogo = ({ category, setSelectedCategory }) => {
  const [ isFixed, setIsFixed ] = useState( false );
  const headerRef = useRef( null );
  const placeholderRef = useRef( null );

  const { thisIsImageHeader } = useAuth()

  const handleScroll = () => {
    if ( headerRef.current && placeholderRef.current ) {
      const headerTop = placeholderRef.current.getBoundingClientRect().top;
      setIsFixed( headerTop <= 0 );
    }
  };
  
  useEffect(() => {
    window.addEventListener( 'scroll', handleScroll );
    return () => {
      window.removeEventListener( 'scroll', handleScroll );
    };
  }, []);

  return (
    <ContainerLogoStyled backgroundImage={ thisIsImageHeader } className='containerLogo'>
      <img src={ LogoSeuAntonio } alt="Logo Seu Antônio" className="logoSeuAntonio" />
      <h2>Nosso Magnífico</h2>
      <h1>Cardápio</h1>
      <h3>de</h3>
      <div ref={ placeholderRef }></div> 
      <div ref={ headerRef } className={ isFixed ? 'fixed' : 'header-content' }>
        <div id="containerH2">
          <h2>{ category }</h2>
        </div>
        <HamburgerMenu setSelectedCategory={ setSelectedCategory } nameHanburguer={ isFixed ? "fixedHamburguer" : "hamburger-menu" }/>
      </div>
    </ContainerLogoStyled>
  )
}

export default ContainerLogo