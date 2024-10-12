// src/components/ContainerLogo/index.jsx
import ContainerLogoMain from "../ContainerLogoMain"
import { ContainerLogoStyled } from "./styles"
import logoSeu from "../../images/seu.jpg"
import logoAntonio from "../../images/antonio.jpg"

const ContainerLogo = () => {
  return (
    <ContainerLogoStyled className='containerLogo'>
      <ContainerLogoMain/>
      <div className='corpoDoContainerDeLogo'>
        <img src={logoSeu} alt="Imagem seu" className="logoSeu"/>
        <img src={logoAntonio} alt="ImagemAntonio" className="logoAntonio"/>
      </div>
      
    </ContainerLogoStyled>
  )
}

export default ContainerLogo