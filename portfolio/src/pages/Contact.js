import React from "react";
import Row from "../components/Row";
import ContactForm from "../components/ContactForm";
import Container from "../components/Container";

function Contact() {
  return (
    <Container>
      <Row title={"Contact Me"}>
        <ContactForm />
      </Row>
    </Container>
  );
}

export default Contact;
