// Styles:
import { Container, Wrapper, Title, TopContainer, TopButton, TopTextContainer, TopText, 
  BottomContainer, ProductInfo, Summary, SummaryTitle, SummaryItem, SummaryItemName, 
  SummaryItemPrice, Button } from "./ShoppingCart.styles";
// Component:
import ShoppingCartItem from "./ShoppingCartItem";

const selectedProducts = [
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/71vOxHi0KRL._AC_UL600_SR600,400_.jpg",
    name: "Essentials Women's Lightweight Water-Resistant Hooded Puffer Coat",
    id: "1234567890",
    color: "black",
    size: "L",
    price: "32.90"
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/81TW1gyWBJL._AC_UL600_SR600,400_.jpg",
    name: "Essentials Women's Classic-Fit Long-Sleeve Full-Zip Polar Soft Fleece Jacket",
    id: "2345678901",
    color: "black",
    size: "L",
    price: "16.40"
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/614VXl7BjqL._AC_UL600_SR600,400_.jpg",
    name: "AUTOMET Womens Casual Plaid Shacket Wool Blend Button Down Long Sleeve Shirt Fall Jacket Shackets",
    id: "3456789012",
    color: "brown",
    size: "L",
    price: "38.98"
  }
];

const ShoppingCart = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Your Order</Title>
        <TopContainer>
          <TopButton>Continue Shopping</TopButton>
          <TopTextContainer>
            <TopText>Shopping Bag (3)</TopText>
            <TopText>Wishlist (0)</TopText>
          </TopTextContainer>
          <TopButton type="filled">Checkout Now</TopButton>
        </TopContainer>
        <BottomContainer>
          <ProductInfo>
            { selectedProducts.map(item => (
              <ShoppingCartItem 
              key={Math.round(Math.random()*1000000)}
              imageSrc={item.image}
              productName={item.name}
              productId={item.id}
              productColor={item.color}
              productSize={item.size}
              productPrice={item.price}
            />)) }
          </ProductInfo>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemName>Subtotal</SummaryItemName>
              <SummaryItemPrice>$88.28</SummaryItemPrice>
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
              <SummaryItemPrice>$91.48</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout now</Button>
          </Summary>
        </BottomContainer>
      </Wrapper>
    </Container>
  );
};

export default ShoppingCart;