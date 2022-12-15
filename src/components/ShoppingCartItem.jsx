// Styles:
import { ProductCard, ProductDetails, ProductImage, Details, ProductName, ProductId, 
  ProductColor, ProductSize, ProductPrice, ProductAmountContainer, Amount, ActualPrice, 
  Hr } from "./ShoppingCartItem.styles";
// Icons:
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";

const ShoppingCartItem = ({ imageSrc, productName, productId, productColor, productSize, productPrice}) => {
  return (
    <>
      <ProductCard>
        <ProductDetails>
          <ProductImage src={imageSrc} />
          <Details>
            <ProductName>
              <b>Product:</b> {productName}
            </ProductName>
            <ProductId>
              <b>ID:</b> {productId}
            </ProductId>
            <ProductColor color={productColor} />
            <ProductSize>
              <b>Size:</b> {productSize}
            </ProductSize>
          </Details>
        </ProductDetails>
        <ProductPrice>
          <ProductAmountContainer>
            <IoIosRemoveCircleOutline size={30} />
            <Amount>1</Amount>
            <IoIosAddCircleOutline size={30} />
          </ProductAmountContainer>
          <ActualPrice>${productPrice}</ActualPrice>
        </ProductPrice>
      </ProductCard>
      <Hr />
    </>
  );
};

export default ShoppingCartItem;
