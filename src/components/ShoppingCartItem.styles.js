import styled from "styled-components";
// Function for media queries:
import { mobile } from "../responsiveDesign";

export const ProductCard = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({
    flexDirection: "column"
  })};
`;

export const ProductDetails = styled.div`
  flex: 2;
  display: flex;

  ${mobile({
    flexDirection: "column",
    alignItems: "center"
  })};
`; 

export const ProductImage = styled.img`
  width: 200px;

  ${mobile({
    width: "70%"
  })};
`; 

export const Details = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`; 

export const ProductName = styled.span`
  ${mobile({
    margin: "10px 0px"
  })};
`; 

export const ProductId = styled.span``; 

export const ProductColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};

  ${mobile({
    margin: "10px 0px"
  })};
`; 

export const ProductSize = styled.span``; 

export const ProductPrice = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  ${mobile({
    margin: "10px 0px"
  })};
`;

export const Amount = styled.span`
  font-size: 24px;
  margin: 0 5px;

  ${mobile({
    fontSize: "20px"
  })};
`; 

export const ActualPrice = styled.span`
  font-size: 30px;
  font-weight: 300;

  ${mobile({
    fontSize: "20px"
  })};
`;

export const Hr = styled.hr`
  height: 1px;
  background-color: #eeeeee;
  border: none;
  margin: 15px;

  ${mobile({
    margin: "25px"
  })};
`;