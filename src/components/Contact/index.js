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
  // const [state, setState] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const [result, setResult] = useState(null);

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("/send", { ...state })
  //     .then((res) => {
  //       setResult(res.data);
  //       setState({ name: "", email: "", message: "" });
  //     })
  //     .catch(() => {
  //       setResult({
  //         success: false,
  //         message: "Something went wrong. Try again later",
  //       });
  //     });
  // };

  // const onInputChange = (e) => {
  //   const { name, value } = e.target;

  //   setState({
  //     ...state,
  //     [name]: value,
  //   });
  // };

  return (
    <>
      <ContactContainer id="contact">
        <FormWrapper>
          <ContactTitle>Get in Touch</ContactTitle>
          <Border />
          <ContactText>Have a question or want to work together?</ContactText>
          {/* {result && <StyledResult>{result.message}</StyledResult>} */}
          <StyledForm
            name="contact v1"
            method="POST"
            data-netlify="true"
            // onSubmit="submit"
          >
            <input type="hidden" name="form-name" value="contact v1" />
            <StyledInput
              type="text"
              name="name"
              placeholder="Name"
              // value={state.name}
              // onChange={onInputChange}
            />
            <StyledInput
              type="email"
              name="email"
              placeholder="Email"
              // value={state.email}
              // onChange={onInputChange}
            />
            <StyledTextArea
              name="message"
              placeholder="Your Message"
              // value={state.message}
              // onChange={onInputChange}
            />
            <StyledButton type="submit">Submit</StyledButton>
          </StyledForm>
        </FormWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
