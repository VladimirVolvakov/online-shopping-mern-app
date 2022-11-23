import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #fcf5f5;
`;

export const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin: 20px 0;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
`;

export const Select = styled.select`
  font-size: 20px;  
  text-align: center;
  padding: 5px;
  border-radius: 0.5rem;
`;

export const Option = styled.option`
  font-size: 20px;
`;
