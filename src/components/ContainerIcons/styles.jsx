// src/components/ContainerIcons/styles.jsx
import styled from "styled-components";

export const ContainerIconsStyled = styled.div`
  display: flex;
  position: sticky !important;
  margin-top: -12px !important;
  padding: 5px;
  width: 69vw;
  margin: auto;
  background-color: rgba(24, 75, 120, 1);
  border-radius: 30px;
  border: 2px solid;
  justify-content: space-around;
  z-index: 1000;

  span {
    font-size: 11px;
    color: rgb(127, 143, 159);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 7px;
  }
`