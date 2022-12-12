import styled from "styled-components";
// Function for media queries:
import { mobile } from "../responsiveDesign";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  ${mobile({
    padding: 0,
    flexDirection: "column"
  })};
`;