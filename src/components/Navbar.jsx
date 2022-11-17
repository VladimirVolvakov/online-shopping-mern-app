// Styles:
import { Container, Wrapper, Left, Center, Right, Logo, Language, SearchContainer, Input, Menu } from "./Navbar.styles";
// Icons:
import { BsSearch, BsCart3 } from 'react-icons/bs';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            VIA_OLI_VIA.
          </Logo>
        </Left>
        <Center>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <BsSearch style={{ color: 'gray', fontSize: '14px' }} />
          </SearchContainer>
        </Center>
        <Right>
          <Menu>
            SIGN UP
          </Menu>
          <Menu>
            SIGN IN
          </Menu>
          <BsCart3 />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;