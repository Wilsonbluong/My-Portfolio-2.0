import React from "react";
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
  return (
    <>
      <ContactContainer id="contact">
        <FormWrapper>
          <ContactTitle>Get in Touch</ContactTitle>
          <Border />
          <ContactText>Have a question or want to work together?</ContactText>
          <StyledForm
            id="#contact-wilson"
            name="contact-wilson"
            method="POST"
            data-netlify="true"
            onSubmit="submit"
          >
            <input type="hidden" name="form-name" value="contact v1" />
            <StyledInput
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required={true}
            />
            <StyledInput
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required={true}
            />
            <StyledTextArea
              id="message"
              name="message"
              placeholder="Your Message"
              required={true}
            />
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
