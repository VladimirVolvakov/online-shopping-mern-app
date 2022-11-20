import styled from "styled-components";

export const Container = styled.div`
  height: 50vh;
  padding: 20px;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 70px;
  margin-bottom: 20px;
`; 

export const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 40px;
`; 

export const InputContainer = styled.div`
  height: 40px;
  width: 50%;
  min-width: 300px;
  background-color: white;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`; 

export const EmailInput = styled.input`
  font-size: 24px;
  padding: 8px 20px;
  border: none;
  border-radius: 0.5rem 0px 0px 0.5rem;
  flex: 7;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  font-size: 24px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 8px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 3;
  
`;
