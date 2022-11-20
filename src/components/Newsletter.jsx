// Styles:
import { Container, Title, Description, InputContainer, EmailInput, Button } from "./Newsletter.styles";
// Icon:
import { BiMailSend } from "react-icons/bi";

const Newsletter = () => {
  return (
    <section id="newsletter">
      <Container>
        <Title>Newsletter</Title>
        <Description>Subscribe to our newsletter and get the latest news delivered to your inbox every week!</Description>
        <InputContainer>
          <EmailInput placeholder="Enter your email to subscribe"/>
          <Button>
            <BiMailSend style={{ fontSize: '30px', marginRight: '5px'}}/> Subscribe now
          </Button>
        </InputContainer>
      </Container>
    </section>
  );
};

export default Newsletter;