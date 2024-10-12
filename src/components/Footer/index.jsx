// src/components/Footer/index.jsx
import ContainerNavigationMenu from "../ContainerNavigationMenu";
import { FooterStyled } from "./styles"

const Footer = ({ setSelectedCategory }) => {
  return (
    <FooterStyled>
      <ContainerNavigationMenu setSelectedCategory={setSelectedCategory} />
    </FooterStyled>
  )
}

export default Footer