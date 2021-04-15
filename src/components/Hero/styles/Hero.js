import styled from "styled-components";
import { motion } from "framer-motion";
// import { Link as ScrollLink } from "react-scroll";

export const HeroContainer = styled.div`
  //background-color: #fff;
  background-image: url("../images/Hero-Bg-5.png");
  background-size: cover;
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 2em;

  @media (min-width: 650px) {
    align-items: center;
  }
`;

export const HeroTitle = styled(motion.h1)`
  color: #e9c46a;
  font-weight: 400;
  font-size: clamp(2rem, 3.55vw, 2rem);
`;

export const HeroSpan = styled.span`
  color: #e9c46a;
  font-weight: 600;
  font-size: 2rem;
`;

export const HeroName = styled(motion.h1)`
  color: #fff;
  font-weight: 200;
  font-size: clamp(3rem, 6vw, 14.5rem);
`;

export const HeroJobTitle = styled(motion.h1)`
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 200;
  color: #fff;
`;

// export const HeroButton = styled(motion.ScrollLink)`
//   padding: 0.75rem 0rem;
//   background: transparent;
//   border: 1px solid #fff;
//   border: 1px solid #e9c46a;
//   margin-top: 3em;
//   text-transform: uppercase;
//   font-weight: bold;
//   cursor: pointer;
//   width: 12em;
//   color: #fff;
//   transition all 2s ease-in-out;

//   &:hover {
//     background: linear-gradient(to right, #e9c46a, #e76f51);
//   }
// `;
