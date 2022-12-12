import styled from "styled-components";
// Function for media queries:
import { mobile } from "../responsiveDesign";

export const Container = styled.div`
  height: 30px;
  background-color: red;
  color: white;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.06em;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({
    fontSize: "10px"
  })}
`;