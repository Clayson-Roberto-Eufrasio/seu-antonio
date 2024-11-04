// src/components/ContainerLogo/styles.jsx
import styled from "styled-components";

export const ContainerLogoStyled = styled.div`
  display: flex;
  position: relative;
  z-index: 21;
  padding: 19px;
  margin-top: 6px;
  background-color: rgb(255, 255, 255); 

  h4 {
    font-size: 16px;
    font-weight: 800;
    line-height: 150%;
    color: rgb(48, 51, 60);
    margin: 0px;
  }

  .corpoDoContainerDeLogo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .logoSeu {
    width: 52px;
  }

  .logoAntonio {
    width: 110px;
  }

`