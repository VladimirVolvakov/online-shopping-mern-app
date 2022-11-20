// Styles:
import { Container, Image, InfoContainer, Icon } from "./ProductItem.styles";
// Icon:
import { BsCart, BsHeart, BsSearch } from "react-icons/bs";

const ProductItem = ({ item }) => {
  return (
    <Container>
      <Image src={item} />
      <InfoContainer>
        <Icon>
          <BsCart />
        </Icon>
        <Icon>
          <BsSearch />
        </Icon>
        <Icon>
          <BsHeart />
        </Icon>
      </InfoContainer>
    </Container>
  );
};

export default ProductItem;