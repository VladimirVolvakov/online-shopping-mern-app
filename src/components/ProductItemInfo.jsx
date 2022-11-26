// Styles:
import { Container, ImageContainer, Image, InfoContainer, Title, Description, 
  Price, FilterContainer, Filter, FilterTitle, FilterColor, FilterSizeSelect,
FilterSizeOption, AddItemContainer, AmountContainer, Amount, Button } from "./ProductItemInfo.styles";
// Icons:
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";

const ProductItemInfo = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="https://images-na.ssl-images-amazon.com/images/I/61N9LO+XamL._AC_UL600_SR600,400_.jpg" />
      </ImageContainer>
      <InfoContainer>
        <Title>Title</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum nulla
          eum ducimus alias cumque quia in dolor deleniti, qui quos?
        </Description>
        <Price>$14.99</Price>
        <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="black" />
            <FilterColor color="gray" />
            <FilterColor color="darkblue" />
          </Filter>
          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSizeSelect>
              <FilterSizeOption>XS</FilterSizeOption>
              <FilterSizeOption>S</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
              <FilterSizeOption>XL</FilterSizeOption>
              <FilterSizeOption>XXL+</FilterSizeOption>
            </FilterSizeSelect>
          </Filter>
        </FilterContainer>
        <AddItemContainer>
          <AmountContainer>
            <IoIosRemoveCircleOutline size={30}/>
            <Amount>1</Amount>
            <IoIosAddCircleOutline size={30} />
          </AmountContainer>
          <Button>ADD TO CART</Button>
        </AddItemContainer>
      </InfoContainer>
    </Container>
  );
};

export default ProductItemInfo;
