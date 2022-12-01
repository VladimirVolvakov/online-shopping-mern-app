// Styles:
import { Container, Wrapper, LeftPart, CentralPart, RightPart, Logo, Language, SearchContainer, Input, Menu } from "./Navbar.styles";
// Icons:
import { BsSearch, BsCart3 } from 'react-icons/bs';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LeftPart>
          <Logo>
            VIA_OLI_VIA.shop
          </Logo>
        </LeftPart>
        <CentralPart>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search..." />
            <BsSearch style={{ color: 'gray', fontSize: '14px' }} />
          </SearchContainer>
        </CentralPart>
        <RightPart>
          <Menu>
            SIGN UP
          </Menu>
          <Menu>
            SIGN IN
          </Menu>
          <BsCart3 />
        </RightPart>
      </Wrapper>
    </Container>
  );
};

export default Navbar;