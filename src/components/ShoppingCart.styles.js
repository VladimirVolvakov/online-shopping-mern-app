import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;
`; 

export const Title = styled.h2`
  font-weight: 300;
  text-align: center;
`; 

export const TopContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`; 

export const TopButton = styled.button`
  color: ${props => props.type === "filled" && "white"};
  font-weight: 600;
  padding: 10px;
  border: ${props => props.type === "filled" && "2px solid transparent"};
  border-radius: 0.5rem;
  background-color: ${props => props.type === "filled" ? "black" : "transparent" };
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${props => props.type === "filled" ? "black" : "white"};
    background-color: ${props => props.type === "filled" ? "transparent" : "black" };
    border: ${props => props.type === "filled" && "2px solid black"};
  }
`; 

export const TopTextContainer = styled.div``; 

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

export const BottomContainer = styled.div``;

export const ProductInfo = styled.div``; 

export const ProductCard = styled.div``;

export const ProductDetails = styled.div``; 

export const ProductImage = styled.img``; 

export const Details = styled.div``; 

export const ProductName = styled.span``; 

export const ProductId = styled.span``; 

export const ProductColor = styled.div``; 

export const ProductSize = styled.span``; 

export const ProductPrice = styled.span``;

export const Summary = styled.div``;

export const ProductAmountContainer = styled.div``;

export const Amount = styled.span``; 

export const ActualPrice = styled.span``;

export const Hr = styled.hr``;

export const SummaryTitle = styled.h2``; 

export const SummaryItem = styled.div``; 

export const SummaryItemName = styled.span``; 

export const SummaryItemPrice = styled.span``; 

export const Button = styled.button``;