import styled from "styled-components";

export const BodyModal = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      text-align: center;
      font-size: 17px;
      line-height: 120%;
      font-weight: 800;
      margin-top: 4px;
    }

    button {
      border: none;
      background-color: transparent;
      font-size: 20px;
      font-weight: 700;
      color: #333;
    }

    p {
      margin: 0px 10px;
      font-size: 15px;
      font-weight: 500;
      line-height: 140%;
      word-break: break-word;
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`