import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const LeftPart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const CentralPart = styled.div`
  flex: 1;
`;

export const RightPart = styled.div`
  flex: 1;
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