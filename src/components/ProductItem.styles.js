import styled from "styled-components";

export const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 5px;
  height: 300px;
  min-width: 300px;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px 0px;

  &:hover ${InfoContainer} {
    opacity: 1;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  height: 75%;
  z-index: 2;
  overflow: hidden;
`;

export const Icon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 10px;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    transform: scale(1.1);
  }
`;