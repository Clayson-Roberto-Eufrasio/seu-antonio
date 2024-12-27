import styled from "styled-components";

export const ContainerLogoStyled = styled.div`
  height: 146px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  z-index: 21;
  padding: 19px 19px 0px 19px;
  background-image: url(${( props ) => props.backgroundImage });
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -63px;

  h1, h2, h3 {
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

  .header-content {
    background-color: transparent;
  }

  .fixed {
    padding-top: 11px;
    position: fixed !important;
    width: 100%;
    top: 0 !important;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
  }

  #containerH2 {
    color: #f7f5f2;
    text-shadow: 2px 2px 5px black;
    height: 65px;
    font-size: 18px;
    margin-top: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logoSeuAntonio {
    width: 21px;
    position: absolute;
    top: 10px;
    left: 16px;
  }

`