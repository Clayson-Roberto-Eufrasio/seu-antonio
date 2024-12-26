import MenuItem from "../MenuItem";
import { CardContainerStyled, ListContainerStyled } from "./styles";

const MenuList = ({ items }) => {
    return (
      <CardContainerStyled>
        <ListContainerStyled className="section">
          { items.map(( item, index ) => (
            <div key={ index }>
              <MenuItem item={ item } />
            </div>
          ))}
        </ListContainerStyled>
      </CardContainerStyled>
    );
  };
  
  export default MenuList;