// Styles:
import { Container, Title } from "./FavouriteProducts.styles";
// Component:
import ProductItem from "./ProductItem";
// Data:
import { popularProducts } from "../data";

const FavouriteProducts = () => {
  return (
    <section id="products">
      <Title>FAVOURITES</Title>
      <Container>
        { popularProducts.map(item => (<ProductItem key={item.id} item={item.img} />)) }
      </Container>
    </section>
  );
};

export default FavouriteProducts;