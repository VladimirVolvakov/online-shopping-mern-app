import styled from "styled-components";
// Function for media queries:
import { mobile } from "../responsiveDesign";

export const Container = styled.div`
  height: 85vh;
  width: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://fashinza.com/textile/wp-content/uploads/2022/03/cde184d8-57de-4719-b7c4-2222bc639498.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({
    height: "75vh"
  })};
`;

export const Wrapper = styled.div`
  width: 40%;
  padding: 30px 20px;
  border-radius: 0.5rem;
  background-color: whitesmoke;

  ${mobile({
    width: "80%"
  })};
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 0.5rem;
  border: none;
  font-size: 14px;
  font-weight: 300;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 40%;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 500;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const Link = styled.a`
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;