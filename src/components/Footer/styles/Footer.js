import styled from "styled-components/macro";
import { FaSpotify, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

export const FooterContainer = styled.div`
  background-color: #1d262d;
  padding-top: 1.5em;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UpArrow = styled(IoIosArrowUp)`
  color: white;
  font-size: 3rem;
  cursor: pointer;
  background-color: #2a9d8f;
  // position: absolute;
  // top: 420;
  // right: 75;
  // transform: translate(-100%, 60%);

  &:hover {
    border-bottom: 3px solid transparent;
  }
`;

export const SocialsContainer = styled.div`
  height: 20vh;
  background-color: #1d262d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  padding: 0.5em 0.75em 0.5em 0.75em;
  margin: 0 0.5em;
  background-color: #262f38;

  &:hover {
    background-color: #ed7b69;
  }
`;

export const Spotify = styled(FaSpotify)``;

export const Github = styled(FaGithub)``;

export const Twitter = styled(FaTwitter)``;

export const Linkedin = styled(FaLinkedin)``;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  background-color: #1d262d;
  color: rgba(255, 255, 255, 0.5);
  padding-bottom: 1.5em;
`;
