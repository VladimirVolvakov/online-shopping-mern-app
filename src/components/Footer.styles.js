import styled from "styled-components";
// Function for media queries:
import { mobile } from "../responsiveDesign";

export const Container = styled.div`
  display: flex;

  ${mobile({
    flexDirection: "column"
  })};
`;

export const LeftPart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const CentralPart = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({
    display: "none"
  })};
`;

export const RightPart = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Logo = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  text-align: justify;
  margin-bottom: 20px;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialMediaIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 0 10px;
  color: white;
  background-color: #${props => props.color};
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  margin-bottom: 20px;

  ${mobile({
    textAlign: "center"
  })};
`

export const LinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const LinksListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;