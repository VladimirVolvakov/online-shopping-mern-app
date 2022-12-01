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

export const Summary = styled.div`
  flex: 1;
  height: 43vh;
  border: 0.5px solid lightgray;
  border-radius: 0.5rem;
  padding: 30px;
`;

export const SummaryTitle = styled.h2`
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
`; 

export const SummaryItem = styled.div`
  font-size: ${props => props.type === "total" ? "24px" : "16px"};
  font-weight: ${props => props.type === "total" ? "600" : "300"};
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
`; 

export const SummaryItemName = styled.span``; 

export const SummaryItemPrice = styled.span``; 

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.06em;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  background-color: black;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: black;
    background-color: transparent;
    border: 2px solid black;
  }
`;