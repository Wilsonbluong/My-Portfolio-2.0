import React, { useState } from "react";
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

const onSubmit = async (event, setSubmitText) => {
  event.preventDefault();
  setSubmitText("Submitting ...");
  const formElements = [...event.currentTarget.elements];
  const isValid =
    formElements.filter((elem) => elem.name === "bot-field")[0].value === "";

  const validFormElements = isValid ? formElements : [];

  if (validFormElements.length < 1) {
    // or some other cheeky error message
    setSubmitText("It looks like you filled out too many fields!");
  } else {
    const filledOutElements = validFormElements
      .filter((elem) => !!elem.value)
      .map(
        (element) =>
          encodeURIComponent(element.name) +
          "=" +
          encodeURIComponent(element.value)
      )
      .join("&");

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: filledOutElements,
    })
      .then(() => {
        setSubmitText("Successfully submitted!");
      })
      .catch((_) => {
        setSubmitText(
          "There was an error with your submission, please email me using the address above."
        );
      });
  }
};

const Contact = () => {
  const [submitText, setSubmitText] = useState(null);

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
            onSubmit={(e) => onSubmit(e, setSubmitText)}
          >
            <input type="hidden" name="form-name" value="contact-wilson" />
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
          {submitText && <p>{submitText}</p>}
        </FormWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
