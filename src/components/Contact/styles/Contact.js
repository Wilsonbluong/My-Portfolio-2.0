import styled from "styled-components/macro";

export const ContactContainer = styled.div`
  color: #fff;
  margin-top: -12vh;
  min-height: 70vh;
  background-color: #252934;
`;

export const Border = styled.div`
  & {
    width: 150px;
    height: 5px;
    background-color: #f8d05d;
  }
  &:after {
    content: "";
  }
`;

export const ContactTitle = styled.div`
  font-weight: 600;
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-transform: uppercase;
`;

export const ContactText = styled.p`
  font-size: 1.15rem;
  margin: 2rem 0;
`;

export const FormWrapper = styled.div`
  padding: 10em 0 3em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledResult = styled.p`
  padding: 1em 0;
`;

export const StyledForm = styled.form`
  width: 400px;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  background-color: #1e242c;
  margin-bottom: 5px;
  padding: 0.5rem;
  color: inherit;
  letter-spacing: 1px;
  font-family: inherit;
`;

export const StyledTextArea = styled.textarea`
  background-color: #1e242c;
  width: 100%;
  min-height: 150px;
  resize: none;
  border: none;
  padding: 0.5rem;
  color: inherit;
  letter-spacing: 1px;
  font-family: inherit;
`;

export const StyledButton = styled.button`
  margin-top: 0.25em;
  padding: 0.5em 1.5em;
  background-color: transparent;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid white;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  float: right;
  transition all 0.3s ease-in-out;

  &:hover, &:focus {
     background-color: #2a9d8f;
     border: 2px solid #2a9d8f;
  }
`;
