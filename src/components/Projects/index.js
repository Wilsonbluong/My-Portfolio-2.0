import React from "react";
import ProjectsGrid from "../ProjectsGrid";
import { ProductsContainer, ProjectsTitle, Border } from "./styles/Projects";

const Projects = () => {
  return (
    <>
      <ProductsContainer id="projects">
        <ProjectsTitle>Projects</ProjectsTitle>
        <Border />
        <ProjectsGrid />
      </ProductsContainer>
    </>
  );
};

export default Projects;
