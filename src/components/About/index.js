import React from "react";
import Skills from "../Skills";

import {
  AboutContainer,
  AboutText,
  AboutTitle,
  Border,
  ProfileImage,
  AboutLeftside,
} from "./styles/About";

// const containerVariants = {
//   hidden: {
//     x: "100",
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: "spring",
//       delay: 0.5,
//     },
//   },
// };

// const borderVariants = {
//   hidden: {
//     x: "100",
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: "spring",
//       delay: 1,
//     },
//   },
// };

const About = () => {
  return (
    <>
      <AboutTitle>About Me</AboutTitle>
      <Border />
      <AboutContainer id="about">
        <AboutLeftside>
          <ProfileImage src="../images/profile.jpg" />
          <AboutText>
            Hello! I'm Wilson, a web developer based in Los Angeles, CA.
            <br />
            <br />I enjoy creating things that live on the internet, whether
            that be websites, applications, or anything in between. My goal is
            to always build products that provide pixel-perfect, performant
            experiences.
          </AboutText>
        </AboutLeftside>
        <Skills />
      </AboutContainer>
    </>
  );
};

export default About;
