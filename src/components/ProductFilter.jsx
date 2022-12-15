// Styles:
import { Container, Title, FilterContainer, Filter, FilterText, Select, Option } from "./ProductFilter.styles";

const ProductFilter = () => {
  return (
    <Container>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products By Size:</FilterText>
          <Select>
            <Option disabled selected>
              Select
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort:</FilterText>
          <Select>
            <Option selected disabled>
              Price
            </Option>
            <Option>Price asc. (1-9)</Option>
            <Option>Price desc. (9-1)</Option>
          </Select>
        </Filter>
      </FilterContainer>
    </Container>
  );
};

export default ProductFilter;
