import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const ProductsContainer = styled.div`
  background-color #F5F5F5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  clip-path: polygon(
  0 0,
  100% 0,
  100% 100%,
  0 calc(100% - 5vw)
  );
`;

export const ProjectsTitle = styled(motion.div)`
  font-weight: 600;
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-transform: uppercase;
  padding: 3rem 0 0 0;
`;

export const Border = styled(motion.div)`
  & {
    width: 150px;
    height: 5px;
    background-color: #f8d05d;
  }
  &:after {
    content: "";
  }
`;
