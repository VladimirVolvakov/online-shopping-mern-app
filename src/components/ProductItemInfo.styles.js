import styled from "styled-components";

export const Container = styled.div`
  padding: 50px;
  display: flex;
`;

export const ImageContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`; 

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`; 

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 300;
`; 

export const Description = styled.p`
  margin: 20px 0;
`; 

export const Price = styled.span`
  font-size: 32px;
  font-weight: 100;
`;