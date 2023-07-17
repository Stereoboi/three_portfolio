import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Map from "./Map";
import {
  Form,
  Section,
  Container,
  Left,
  Title,
  Input,
  TextArea,
  Button,
  Right,
} from "./Contact.styled";

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_EMAIL,
        import.meta.env.VITE_TEMPLATE_EMAIL,
        ref.current,
        import.meta.env.VITE_PUBLIC_EMAIL
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section id="contacts">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
