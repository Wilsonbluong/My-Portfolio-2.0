import styled from "styled-components/macro";

export const ProjectsGridContainer = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fit, minmax(19em, 0.5fr));
  grid-auto-rows: 19em;
  grid-gap: 0.35rem;
  margin: 3rem 0 9rem 0;
  padding: 2rem;
`;

export const ImageWrap = styled.div`
  position: relative;
  opacity: 0.9;
`;

export const ProjectTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
  border: 1px solid #e76f51;
  padding: 0.25em 1em;
`;

export const ProjectDesc = styled.p`
  text-align: center;
  font-size: 0.85rem;
  padding: 0 1.5rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProjectLink = styled.a`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
  border: 1px solid #e76f51;
  padding: 0.25em 1em;
  text-decoration: none;
  transition all 0.3s ease-in-out;
  
  &:hover {
    color: black;
    background-color: white;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0e1111;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  backdrop-filter: blur(4px);
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:hover ${ProjectTitle} {
    // transform: translateY(8rem);
    // transition: transform 0.35s;
  }
`;
