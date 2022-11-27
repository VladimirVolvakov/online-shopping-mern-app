// Styles:
import { Container, Wrapper, Title, Form, InputContainer, Label, Input, Button, LinksContainer, Link } from "./SignIn.styles";

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <InputContainer>
            <Label>E-mail</Label>
            <Input placeholder="Enter your email" />
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
          </InputContainer>
          <Button>Login</Button>
          <LinksContainer>
            <Link>Forgot password?</Link>
            <Link>Create a new account</Link>
          </LinksContainer>
          
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignIn;