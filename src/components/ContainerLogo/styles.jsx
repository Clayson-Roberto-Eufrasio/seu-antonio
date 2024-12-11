// src/components/ContainerLogo/styles.jsx
import styled from "styled-components";
import pratoPoseidon from "../../images/ParaCompartilhar/PseidonLogo.webp"

export const ContainerLogoStyled = styled.div`
  height: 110px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  z-index: 21;
  padding: 19px;
  margin-top: 6px;
  background-image: url(${pratoPoseidon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -63px;

  h1, h2 {
    margin: 0px;
    color: white;
    text-shadow: 8px 8px 6px rgba(0, 0, 0, 1);
  }

  h1 {
    font-size: 42px;
  }

  h2 {
    font-size: 22px;
  }

`