// src/components/ContainerNavigationMenu/styles.jsx
import styled from "styled-components";

export const ContainerNavigationStyled = styled.div`
  white-space: nowrap;
  text-align: center;
  border-radius: 10px;
  position: sticky;
  top: 0;
`;

export const ContainerNavigationMenuStyled = styled.nav`
  display: flex;
  z-index: 1000;
  flex-direction: column;
  padding: 13px;

  button {
    font-size: 18px;
    font-weight: 900;
    height: 150px;
    color: white;
    text-shadow: 2px 2px 5px black;
    cursor: pointer;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
    background-color: transparent;
  }
`;