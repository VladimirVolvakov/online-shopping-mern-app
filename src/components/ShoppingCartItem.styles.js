import styled from "styled-components";

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