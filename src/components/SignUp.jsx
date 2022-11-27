// Styles:
import { Container, Wrapper, Title, Form, InputContainer, Label, Input, Agreement, Button } from "./SignUp.styles";

const SignUp = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create a FREE account</Title>
        <Form>
          <InputContainer>
            <Label>Name</Label>
            <Input placeholder="Ivan" />
          </InputContainer>
          <InputContainer>
            <Label>Last name</Label>
            <Input placeholder="Ivanov" />
          </InputContainer>
          <InputContainer>
            <Label>E-mail</Label>
            <Input placeholder="myemail@example.com" />
          </InputContainer>
          <InputContainer>
            <Label>Phone number</Label>
            <Input placeholder="+7-749-123-45-67" />
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <Input placeholder="min. 8 signs (a-z, A-Z, 0-9)" />
          </InputContainer>
          <InputContainer>
            <Label>Confirm Password</Label>
            <Input placeholder="Re-enter your password" />
          </InputContainer>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Sign In</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUp;