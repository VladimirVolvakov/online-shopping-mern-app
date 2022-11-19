import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  flex: 1;
  height: 70vh;
  margin: 5px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 45%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: white;
  font-size: 32px;
  letter-spacing: 0.06em;
  background-color: #000000;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  background-color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    transition: all 0.3s;
  }
`;