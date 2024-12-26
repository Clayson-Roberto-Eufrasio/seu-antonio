// src/components/HamburgerMenu/index.jsx
import React, { useEffect, useRef, useState } from 'react';
import { HamburgerIcon, HamburgerMenuStyled, MenuContent } from './styles';
import { categoryTranslations } from '../../utils/categoryTranslations';
import { useAuth } from '../contexts/AuthContext';

const HamburgerMenu = ({ setSelectedCategory, nameHanburguer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = Object.keys(categoryTranslations);
  const menuRef = useRef(null);

  const { toggleBetweenHeaderImages } = useAuth() 

  const scrollToTop = () => window.scrollTo({ top: 150, behavior: 'smooth' });
  const scrollToTopFull = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    scrollToTop()
  };

  const toggleMenuClose = () => {
    setIsOpen(false);
    scrollToTopFull();
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <HamburgerMenuStyled ref={menuRef}>
      <div className={nameHanburguer}>
        <HamburgerIcon className={isOpen ? 'open' : ''} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </HamburgerIcon>
        <MenuContent className={isOpen ? 'visible' : ''}>
          <ul>
            {categories.map((category) => (
              <div key={category}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCategory(category);
                    toggleMenuClose();
                    toggleBetweenHeaderImages(category)
                    console.log(category)
                  }}
                >
                  {categoryTranslations[category]}
                </button>
              </div>
            ))}
          </ul>
        </MenuContent>
      </div>
    </HamburgerMenuStyled>
  );
};

export default HamburgerMenu;
