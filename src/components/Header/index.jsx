import ContainerLogo from "../ContainerLogo";
import { HeaderStyled } from "./styles";

const Header = ({ category, setSelectedCategory }) => {
    return (
      <>
        <HeaderStyled id="header-container">
          <ContainerLogo category={ category } setSelectedCategory={ setSelectedCategory }/>
        </HeaderStyled>
      </>
    );
  };
  
  export default Header;