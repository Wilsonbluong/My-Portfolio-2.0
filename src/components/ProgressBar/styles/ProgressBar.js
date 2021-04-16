import styled from "styled-components/macro";

export const Progress = styled.div`
  background-color: #d8d8d8;
  margin-bottom: 3px;
  height: 20px;
  width: 320px;

  @media (min-width: 900px) {
    margin-bottom: 7px;
    width: 370px;
  }
`;

export const ProgressDone = styled.div`
  background: linear-gradient(to left, #ff9472, #f2709c);
  color: #fff;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;
`;
