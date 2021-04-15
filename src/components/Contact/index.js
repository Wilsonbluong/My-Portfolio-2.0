import React, { useState } from "react";
import axios from "axios";
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
  StyledResult,
} from "./styles/Contact.js";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState(null);

  const sendEmail = (event) => {
    event.preventDefault();
    axios
      .post("/send", { ...state })
      .then((res) => {
        setResult(res.data);
        setState({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setResult({
          success: false,
          message: "Something went wrong. Try again later",
        });
      });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <>
      <ContactContainer id="contact">
        <FormWrapper>
          <ContactTitle>Get in Touch</ContactTitle>
          <Border />
          <ContactText>Have a question or want to work together?</ContactText>
          {result && <StyledResult>{result.message}</StyledResult>}
          <StyledForm onSubmit={sendEmail}>
            <StyledInput
              type="text"
              name="name"
              placeholder="Name"
              value={state.name}
              onChange={onInputChange}
            />
            <StyledInput
              type="email"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={onInputChange}
            />
            <StyledTextArea
              name="message"
              value={state.message}
              placeholder="Your Message"
              onChange={onInputChange}
            />
            <StyledButton type="submit">Submit</StyledButton>
          </StyledForm>
        </FormWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
