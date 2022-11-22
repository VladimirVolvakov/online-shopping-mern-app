import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftPart = styled.div`
  flex: 1;
`;

export const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`;

export const CentralPart = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;

  &:focus {
    outline: none;
  }
`;

export const RightPart = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

export const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 25px;
`;