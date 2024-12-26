import styled from "styled-components";

export const CardContainerStyled = styled.div`
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.9);
  border-radius: 15px;
  margin-bottom: 20px;
  padding: 20px;
  transition: opacity 0.5s ease-in-out;
  cursor: pointer;

  .bodyOfItem {
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    color: black; 

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 17px;
  line-height: 120%;
  font-weight: 800;
  margin-top: 4px;
`;

export const Price = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  line-height: 120%;
  font-weight: 800;
  margin: 0px 10px;
`;

export const Description = styled.p`
  margin: 0px 10px;
  font-size: 15px;
  font-weight: 500;
  line-height: 140%;
  word-break: break-word;
`;