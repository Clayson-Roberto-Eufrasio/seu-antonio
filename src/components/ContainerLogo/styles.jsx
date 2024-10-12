// src/components/ContainerLogo/styles.jsx
import styled from "styled-components";
import fundoLogo from '../../images/peixeFundo.jpg'

export const ContainerLogoStyled = styled.div`
  display: flex;
  position: relative;
  z-index: 21;
  padding: 19px;
  margin-top: 6px;
  background-color: rgb(255, 255, 255); 
  //background-image: url(${fundoLogo});
  //background-size: 40px;

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
    width: 57px;
  }

  .logoAntonio {
    width: 120px;
  }

`