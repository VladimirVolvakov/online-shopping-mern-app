// Styles:
import { Container, LeftPart, CentralPart, RightPart, Logo, Description, SocialMediaContainer, SocialMediaIcon, Title, LinksList, LinksListItem } from "./Footer.styles";
// Icons:
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <Container>
        <LeftPart>
          <Logo>VIA_OLI_VIA.shop</Logo>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, itaque dolore eaque voluptates, 
            tempore consequatur ea amet sed a voluptatibus quia nulla fuga fugiat tempora aut corrupti. 
            Quibusdam, in odio?
          </Description>
          <SocialMediaContainer>
            <SocialMediaIcon color="3B5999">
              <AiOutlineFacebook />
            </SocialMediaIcon>
            <SocialMediaIcon color="E4405F">
              <AiOutlineInstagram />
            </SocialMediaIcon>
            <SocialMediaIcon color="55ACEE">
              <AiOutlineTwitter />
            </SocialMediaIcon>
            <SocialMediaIcon color="0088CC">
              <BsTelegram />
            </SocialMediaIcon>
          </SocialMediaContainer>
        </LeftPart>
        <CentralPart>
          <Title>Useful Links</Title>
          <LinksList>
            <LinksListItem>Home</LinksListItem>
            <LinksListItem>Cart</LinksListItem>
            <LinksListItem>Men Fashion</LinksListItem>
            <LinksListItem>Order Tracking</LinksListItem>
            <LinksListItem>Women Fashion</LinksListItem>
            <LinksListItem>Wishlist</LinksListItem>
            <LinksListItem>Accessories</LinksListItem>
            <LinksListItem>Terms</LinksListItem>
            <LinksListItem>My Account</LinksListItem>
          </LinksList>
        </CentralPart>
        <RightPart></RightPart>
      </Container>
    </footer>
  );
};

export default Footer;