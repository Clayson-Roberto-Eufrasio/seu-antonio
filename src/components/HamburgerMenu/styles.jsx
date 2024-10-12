// src/components/HamburgerMenu/styles.jsx

import styled from 'styled-components';
import fundoMenu from '../../images/fundoMenuPequeno.jpg'

export const HamburgerMenuStyled = styled.div`
  .hamburger-menu {
    position: absolute;
    top: 175px;
    right: 15px;
    z-index: 1000;
  }

  .fixedHamburguer {
    position: fixed !important;
    top: 32px !important;
    right: 15px;
    z-index: 1000;
  }
`;

export const HamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 27px;
  height: 21px;
  cursor: pointer;

  div {
    width: 100%;
    height: 3px;
    background-color: white;
    transition: all 0.3s ease-in-out;
  }

  &.open div:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 5px);
  }

  &.open div:nth-child(2) {
    opacity: 0;
  }

  &.open div:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -5px);
  }
`;

export const MenuContent = styled.div`
  width: 90%;
  max-height: 80vh; /* Set a maximum height for scrolling */
  overflow-y: auto; /* Enable vertical scrolling */
  position: fixed; /* Fixed positioning to stay in front of other elements */
  top: 87px;
  right: 6px;
  background-image: url(${fundoMenu});
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  border: 1px solid #ddd;
  border-radius: 30px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 9999; /* Ensure it's in front of other elements */

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 10px 0;
  }

  button {
    height: 87px;
    background-color: #0909095c;
    width: 100%;
    border: none;
    text-shadow: 2px 2px 2px black;
    color: white;
    border-radius: 30px;
    margin-bottom: 12px;
    box-shadow: 2px 2px 4px black;
    font-size: 20px;
    font-weight: 900;
  }
`;
