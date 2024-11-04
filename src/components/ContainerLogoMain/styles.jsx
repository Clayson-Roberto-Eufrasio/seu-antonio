// src/components/ContainerLogoMain/styles.jsx
import styled from "styled-components";

import logo from "../../images/logo-seu-antonio.jpg"

export const ContainerLogoMainStyled = styled.img`
    width: 60px;
    height: 60px;
    border: 5px solid;
    border-color: rgba(24, 75, 120, 1);
    margin-right: 12px;
    border-radius: 50%;
    box-shadow: 0px 0px 13px black;
    background-size: 26px;
    background-position: center center;
    background-image: url(${logo});
    background-repeat: no-repeat;
`;