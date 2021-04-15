import React from "react";

import {
  HeroContainer,
  HeroJobTitle,
  HeroName,
  HeroTitle,
  HeroSpan,
  //HeroButton,
} from "./styles/Hero";

const containerVariants = {
  hidden: {
    y: "-250",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 250,
      delay: 0.5,
    },
  },
};

// const buttonVariants = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       delay: 1.0,
//     },
//   },
// };

const Hero = () => {
  return (
    <>
      <HeroContainer id="hero">
        <HeroTitle
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          Hello, World.
        </HeroTitle>
        <HeroName
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          I'm Wilson Luong
        </HeroName>
        <HeroJobTitle
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroSpan>&&</HeroSpan> I'm a Full Stack Developer
          <HeroSpan>.</HeroSpan>
        </HeroJobTitle>
        {/* <HeroButton
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          More About Me
        </HeroButton> */}
      </HeroContainer>
    </>
  );
};

export default Hero;
