import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const AboutContainer = styled.div`
  min-height: calc(100vh -80px);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;

export const AboutTitle = styled(motion.h1)`
  font-weight: 600;
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-transform: uppercase;
  padding: 3rem 0 0 0;
  text-align: center;
`;

export const Border = styled(motion.div)`
  & {
    width: 150px;
    height: 5px;
    background-color: #f8d05d;
    margin: 0 auto;
  }
  &:after {
    content: "";
  }
`;

export const AboutLeftside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProfileImage = styled(motion.img)`
  display: block;
  border: 0;
  width: 300px;
  margin: 3rem auto 2rem auto;
  box-shadow: 5px 5px 0px #264653, 10px 10px 0 #2a9d8f;
  height: auto;

  @media (min-width: 650px) {
    max-width: 400px;
  }
`;

export const AboutText = styled(motion.p)`
  width: 320px;
  max-width: 400px;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 1em;

  @media (min-width: 900px) {
    margin-bottom: 3rem;
  }
`;
