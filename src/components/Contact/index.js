import React, { useState, useEffect } from "react";
//import axios from "axios";
import {
  ContactContainer,
  StyledForm,
  StyledInput,
  FormWrapper,
  ContactTitle,
  ContactText,
  Border,
  StyledTextArea,
  StyledButton,
  //StyledResult,
} from "./styles/Contact.js";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return (
    <>
      <ContactContainer id="contact">
        <FormWrapper>
          <ContactTitle>Get in Touch</ContactTitle>
          <Border />
          <ContactText>Have a question or want to work together?</ContactText>
          {success && (
            <p style={{ color: "green", padding: "1em" }}>
              Thanks for your message!{" "}
            </p>
          )}
          <StyledForm
            name="contact-wilson"
            method="POST"
            action="/contact/?success=true"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact-wilson" />
            <StyledInput
              type="text"
              name="name"
              placeholder="Name"
              required={true}
            />
            <StyledInput
              type="email"
              name="email"
              placeholder="Email"
              required={true}
            />
            <StyledTextArea
              name="message"
              placeholder="Your Message"
              required={true}
            ></StyledTextArea>
            <StyledButton type="submit" name="SendMessage">
              Submit
            </StyledButton>
          </StyledForm>
        </FormWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
