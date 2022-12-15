import styled from "styled-components";
// Function for media queries:
import { mobile } from "../responsiveDesign";

export const Container = styled.div`
  padding: 50px;
  display: flex;

  ${mobile({
    padding: "10px",
    flexDirection: "column"
  })};
`;

export const ImageContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;

  ${mobile({
    marginBottom: "10px"
  })};
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  ${mobile({
    padding: "20px"
  })};
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 300;

  ${mobile({
    fontSize: "24px"
  })};
`;

export const Description = styled.p`
  margin: 30px 0;
  text-align: justify;

  ${mobile({
    margin: "20px 0px"
  })};
`;

export const Price = styled.span`
  font-size: 32px;
  font-weight: 100;

  ${mobile({
    fontSize: "24px"
  })};
`;

export const FilterContainer = styled.div`
  margin: 30px 0;
  width: 50%;
  display: flex;
  justify-content: space-between;

  ${mobile({
    margin: "20px 0px",
    width: "100%"
  })};
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
  margin-right: 10px;

  ${mobile({
    fontSize: "16px"
  })};
`;

export const FilterColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

export const FilterSizeSelect = styled.select`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  padding: 5px;
  border-radius: 0.5rem;
  cursor: pointer;

  ${mobile({
    fontSize: "16px"
  })};
`;

export const FilterSizeOption = styled.option`
  font-size: 20px;
  font-weight: 300;

  ${mobile({
    fontSize: "16px"
  })};
`;

export const AddItemContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({
    width: "100%"
  })};
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

export const Amount = styled.span`
  height: 30px;
  width: 30px;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 600;
  background-color: transparent;
  border: 2px solid red;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: red;
    color: white;
  }
`;
