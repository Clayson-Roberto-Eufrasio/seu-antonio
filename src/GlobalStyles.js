// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import backgroundImage from './images/fundo-header.jpg';

const GlobalStyles = createGlobalStyle`
  body {
    min-height: 1000px;
    margin: 0;
    padding: 0;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: 'Arial', sans-serif;
    color: #333;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;

    /* Adicionando uma correção para dispositivos móveis */
    @media (max-width: 768px) {
      
    }
  }
`;

export default GlobalStyles;
