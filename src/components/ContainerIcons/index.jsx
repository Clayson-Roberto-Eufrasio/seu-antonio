// src/components/ContainerIcons/index.jsx
import { ContainerIconsStyled } from "./styles"
import { PiSunHorizonBold, PiMusicNotes } from "react-icons/pi";
import { GiKnifeFork } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";

const ContainerIcons = () => {
  return (
    <ContainerIconsStyled>
      <div>
        <GiKnifeFork size={12} color={"rgb(255 255 255)"}/>
      </div>

      <div>
        <BiDrink size={12} color={"rgb(255 255 255)"}/>
      </div>

      <div>
        <PiMusicNotes size={12} color={"rgb(255 255 255)"}/>
      </div>

      <div>
        <PiSunHorizonBold size={12} color={"rgb(255 255 255)"}/>
      </div>
    </ContainerIconsStyled>
  )
}

export default ContainerIcons