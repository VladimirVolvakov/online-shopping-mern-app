// Styles:
import { Container, Wrapper, Title, TopContainer, TopButton, TopTextContainer, TopText, BottomContainer, ProductInfo, ProductCard,
ProductDetails, ProductImage, Details, ProductName, ProductId, ProductColor, ProductSize, ProductPrice, Summary, ProductAmountContainer,
Amount, ActualPrice, Hr, SummaryTitle, SummaryItem, SummaryItemName, SummaryItemPrice, Button } from "./ShoppingCart.styles";
// Icons:
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";

const ShoppingCart = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Your Order</Title>
        <TopContainer>
          <TopButton>Continue Shopping</TopButton>
          <TopTextContainer>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Wishlist (0)</TopText>
          </TopTextContainer>
          <TopButton type="filled">Checkout Now</TopButton>
        </TopContainer>
        <BottomContainer>
          <ProductInfo>
            <ProductCard>
              <ProductDetails>
                <ProductImage src="https://images-na.ssl-images-amazon.com/images/I/71vOxHi0KRL._AC_UL600_SR600,400_.jpg" />
                <Details>
                  <ProductName><b>Product:</b> Essentials Women's Lightweight Water-Resistant Hooded Puffer Coat</ProductName>
                  <ProductId><b>ID:</b> 1234567890</ProductId>
                  <ProductColor color="black" />
                  <ProductSize><b>Size:</b> L</ProductSize>
                </Details>
              </ProductDetails>
              <ProductPrice>
                <ProductAmountContainer>
                  <IoIosRemoveCircleOutline size={30}/>
                  <Amount>1</Amount>
                  <IoIosAddCircleOutline size={30} />
                </ProductAmountContainer>
                <ActualPrice>$32.90</ActualPrice>
              </ProductPrice>
            </ProductCard>
            <Hr/>
            <ProductCard>
              <ProductDetails>
                <ProductImage src="https://images-na.ssl-images-amazon.com/images/I/81TW1gyWBJL._AC_UL600_SR600,400_.jpg" />
                <Details>
                  <ProductName><b>Product:</b> Essentials Women's Classic-Fit Long-Sleeve Full-Zip Polar Soft Fleece Jacket</ProductName>
                  <ProductId><b>ID:</b> 2345678901</ProductId>
                  <ProductColor color="black" />
                  <ProductSize><b>Size:</b> L</ProductSize>
                </Details>
              </ProductDetails>
              <ProductPrice>
                <ProductAmountContainer>
                  <IoIosRemoveCircleOutline size={30}/>
                  <Amount>1</Amount>
                  <IoIosAddCircleOutline size={30} />
                </ProductAmountContainer>
                <ActualPrice>$16.40</ActualPrice>
              </ProductPrice>
            </ProductCard>
            <Hr/>
            <ProductCard>
              <ProductDetails>
                <ProductImage src="https://images-na.ssl-images-amazon.com/images/I/614VXl7BjqL._AC_UL600_SR600,400_.jpg" />
                <Details>
                  <ProductName><b>Product:</b> AUTOMET Womens Casual Plaid Shacket Wool Blend Button Down Long Sleeve Shirt Fall Jacket Shackets</ProductName>
                  <ProductId><b>ID:</b> 3456789012</ProductId>
                  <ProductColor color="brown" />
                  <ProductSize><b>Size:</b> L</ProductSize>
                </Details>
              </ProductDetails>
              <ProductPrice>
                <ProductAmountContainer>
                  <IoIosRemoveCircleOutline size={30}/>
                  <Amount>1</Amount>
                  <IoIosAddCircleOutline size={30} />
                </ProductAmountContainer>
                <ActualPrice>$38.98</ActualPrice>
              </ProductPrice>
            </ProductCard>
          </ProductInfo>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemName>Subtotal</SummaryItemName>
              <SummaryItemPrice>$80.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemName>Estimated Shipping</SummaryItemName>
              <SummaryItemPrice>$3.70</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemName>Shipping Discount</SummaryItemName>
              <SummaryItemPrice>-$0.50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemName>Total</SummaryItemName>
              <SummaryItemPrice>$83.20</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout now</Button>
          </Summary>
        </BottomContainer>
      </Wrapper>
    </Container>
  );
};

export default ShoppingCart;