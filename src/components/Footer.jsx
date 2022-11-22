// Styles:
import { Container, LeftPart, CentralPart, RightPart, Logo, Description, SocialMediaContainer, SocialMediaIcon } from "./Footer.styles";
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
            <SocialMediaIcon color="E60023">
              <BsTelegram />
            </SocialMediaIcon>
          </SocialMediaContainer>
        </LeftPart>
        <CentralPart></CentralPart>
        <RightPart></RightPart>
      </Container>
    </footer>
  );
};

export default Footer;