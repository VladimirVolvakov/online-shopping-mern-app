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

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductInfo = styled.div`
  flex: 3;
`; 

export const ProductCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`; 

export const ProductImage = styled.img`
  width: 200px;
`; 

export const Details = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`; 

export const ProductName = styled.span``; 

export const ProductId = styled.span``; 

export const ProductColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`; 

export const ProductSize = styled.span``; 

export const ProductPrice = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Summary = styled.div`
  flex: 1;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Amount = styled.span`
  font-size: 24px;
  margin: 0 5px;
`; 

export const ActualPrice = styled.span`
  font-size: 30px;
  font-weight: 300;
`;

export const Hr = styled.hr`
  height: 1px;
  background-color: #eeeeee;
  border: none;
  margin: 15px;
`;

export const SummaryTitle = styled.h2``; 

export const SummaryItem = styled.div``; 

export const SummaryItemName = styled.span``; 

export const SummaryItemPrice = styled.span``; 

export const Button = styled.button``;