// src/components/ContainerNavigationMenu/index.jsx
import React from 'react';
import Slider from "react-slick";
import { ContainerNavigationMenuStyled, ContainerNavigationStyled } from "./styles";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { categoryTranslations } from '../../utils/categoryTranslations'; // Importa as traduções

const ContainerNavigationMenu = ({ setSelectedCategory }) => {
  const categories = Object.keys(categoryTranslations); // Obtém as categorias diretamente das traduções

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: false, arrows: false } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2, arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false } }
    ]
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <ContainerNavigationStyled id="container-nav">
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category}>
            <ContainerNavigationMenuStyled>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedCategory(category);
                  scrollToTop();
                }}
              >
                {categoryTranslations[category]}
              </button>
            </ContainerNavigationMenuStyled>
          </div>
        ))}
      </Slider> 
    </ContainerNavigationStyled>
  );
}

export default ContainerNavigationMenu;
