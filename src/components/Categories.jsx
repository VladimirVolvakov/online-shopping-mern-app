// Styles:
import { Container } from "./Categories.styles";
// Component:
import CategoryItem from "./CategoryItem";
// Data:
import { categories } from "../data";

const Categories = () => {
  return (
    <section id="categories">
      <Container>
        { categories.map(item => (<CategoryItem item={item} />)) }
      </Container>
    </section>
  );
};

export default Categories;