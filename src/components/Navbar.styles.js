import styled from "styled-components";
// Function for media queries:
import { mobile } from "../responsiveDesign";

export const Container = styled.div`
  height: 60px;

  ${mobile({
    height: "auto",
  })}
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({
    padding: "15px 5px",
    backgroundColor: "#DEF5E5",
    flexDirection: "column"
  })}
`;

export const LeftPart = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.h1`
  font-weight: bold;
  text-align: center;

  ${mobile({
    fontSize: "24px"
  })}
`;

export const CentralPart = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile({
    display: "none"
  })}
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  border-radius: 0.5rem;
  margin-left: 25px;
  padding: 5px;

  ${mobile({
    margin: "10px 0"
  })}
`;

export const Input = styled.input`
  border: none;

  &:focus {
    outline: none;
  }

  ${mobile({
    background: "transparent"
  })}
`;

export const RightPart = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  ${mobile({
    justifyContent: "center"
  })}
`;

export const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 25px;

  ${mobile({
    fontSize: "12px",
    marginRight: "35px"
  })}
`;