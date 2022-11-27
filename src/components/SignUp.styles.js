import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.wsj.net/im-639629?width=1280&size=1") center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 40%;
  padding: 10px 20px;
  border-radius: 0.5rem;
  background-color: whitesmoke;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

export const Form = styled.form`
  margin: 20px 0;
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

export const Agreement = styled.span`
  font-size: 11px;
  font-weight: 300;
  margin: 10px 0 20px;
`;

export const Button = styled.button`
  width: 40%;
  margin: 0 auto;
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
