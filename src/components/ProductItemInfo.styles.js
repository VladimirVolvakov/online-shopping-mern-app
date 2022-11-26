import styled from "styled-components";

export const Container = styled.div`
  padding: 50px;
  display: flex;
`;

export const ImageContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`; 

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`; 

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 300;
`; 

export const Description = styled.p`
  margin: 20px 0;
  text-align: justify;
`; 

export const Price = styled.span`
  font-size: 32px;
  font-weight: 100;
`;

export const FilterContainer = styled.div`
  margin: 20px 0;
  width: 50%;
  display: flex;
  justify-content: space-between;
`; 

export const Filter = styled.div`
  display: flex;
  align-items: center;
`; 

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
  margin-right: 10px;
`; 

export const FilterColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => props.color};
  cursor: pointer;
`; 

export const FilterSizeSelect = styled.select`
  font-size: 20px;  
  font-weight: 300;
  text-align: center;
  padding: 5px;
  border-radius: 0.5rem;
`;

export const FilterSizeOption = styled.option`
  font-size: 20px;
  font-weight: 300;
`;