import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  SocialLink,
  SocialsContainer,
  Spotify,
  Github,
  Linkedin,
  Twitter,
  FooterTop,
  FooterBottom,
  UpArrow,
} from "./styles/Footer";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterTop>
          <UpArrow onClick={toggleHome} />
        </FooterTop>
        <SocialsContainer>
          <SocialLink href="https://github.com/Wilsonbluong">
            <Github />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/wilsonbluong/">
            <Linkedin />
          </SocialLink>
          <SocialLink href="https://twitter.com/Wbluong">
            <Twitter />
          </SocialLink>
          <SocialLink href="https://open.spotify.com/playlist/5yPlPZ7MCn2noT5gDkFkqf?si=53341a82e7fd4ab0">
            <Spotify />
          </SocialLink>
        </SocialsContainer>
      </FooterContainer>
      <FooterBottom> © 2021 Designed & Built by Wilson Luong</FooterBottom>
    </>
  );
};

export default Footer;
