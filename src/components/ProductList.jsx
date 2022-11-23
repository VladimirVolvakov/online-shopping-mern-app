// Styles:
import { Container } from "./FavouriteProducts.styles";
// Component:
import ProductItem from "./ProductItem";
// Data:
import { productList } from "../data";

const ProductList = () => {
  return (
    <section id="products">
      <Container>
        { productList.map(item => (<ProductItem key={item.id} item={item.img} />)) }
      </Container>
    </section>
  );
};

export default ProductList;