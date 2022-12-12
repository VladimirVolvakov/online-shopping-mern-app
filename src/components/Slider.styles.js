import styled from "styled-components";
// Function for media queries:
import { mobile } from "../responsiveDesign";

export const Container = styled.div`
  height: 88vh;
  width: 100%;
  padding: 0 10px;
  display: flex;
  position: relative;
  overflow: hidden;

  ${mobile({
    display: "none"
  })};
`;

export const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "15px"};
  right: ${props => props.direction === "right" && "15px"};
  margin: auto;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: #e5dede;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: all 0.3s ease;
`;

export const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg}
`;

export const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const Image = styled.img`
  height: 80%;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h2`
  font-size: 70px;
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  margin: 50px 0;
`;

export const Button = styled.button`
  padding: 15px;
  font-size: 20px;
  font-weight: 600;
  background-color: transparent;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    transition: all 0.3s;
  }
`;