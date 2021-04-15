import React from "react";
import SingleProject from "../SingleProject";

import {
  ImageOverlay,
  ImageWrap,
  ProjectDesc,
  ProjectsGridContainer,
  ProjectTitle,
  LinkContainer,
  ProjectLink,
} from "./styles/ProjectsGrid";

const ProjectsGrid = ({ src }) => {
  return (
    <>
      <ProjectsGridContainer>
        <ImageWrap>
          <SingleProject src="../images/project3.jpg" />
          <ImageOverlay>
            <ProjectTitle>Watchflix</ProjectTitle>
            <ProjectDesc>
              A Netflix clone built using React and Firebase. The web app allows
              users to log in and watch their favorite show or film!
            </ProjectDesc>
            <LinkContainer>
              <ProjectLink href="https://github.com/Wilsonbluong/Watchflix">
                Source Code
              </ProjectLink>
              <ProjectLink href="https://my-react-watchflix.netlify.app/">
                See Live
              </ProjectLink>
            </LinkContainer>
          </ImageOverlay>
        </ImageWrap>
        <ImageWrap>
          <SingleProject src="../images/pacsun2.jpg" />
          <ImageOverlay>
            <ProjectTitle>Pacsun</ProjectTitle>
            <ProjectDesc>
              A Pacsun clone built using React. A fully responsive website to
              allow users to do some retail therapy.
            </ProjectDesc>
            <LinkContainer>
              <ProjectLink href="https://github.com/Wilsonbluong/E-commerce-page">
                Source Code
              </ProjectLink>
              <ProjectLink href="https://tender-poincare-9b7659.netlify.app">
                See Live
              </ProjectLink>
            </LinkContainer>
          </ImageOverlay>
        </ImageWrap>
        <ImageWrap>
          <SingleProject src="../images/snapgram2.jpg" />
          <ImageOverlay>
            <ProjectTitle>Snapgram</ProjectTitle>
            <ProjectDesc>
              A Instagram-like clone using React and Firebase. Upload your
              favorite memories using this app!
            </ProjectDesc>
            <LinkContainer>
              <ProjectLink href="https://github.com/Wilsonbluong/snapgram">
                Source Code
              </ProjectLink>
              <ProjectLink href="https://firegram-85368.web.app/">
                See Live
              </ProjectLink>
            </LinkContainer>
          </ImageOverlay>
        </ImageWrap>
        <ImageWrap>
          <SingleProject src="../images/beachresort.jpg" />
          <ImageOverlay>
            <ProjectTitle>Getaway</ProjectTitle>
            <ProjectDesc>
              A beach resort webpage built using React. Users are able to pick
              their perfect getaway by filtering through rooms that meet their
              needs. Au revoir!
            </ProjectDesc>
            <LinkContainer>
              <ProjectLink href="https://github.com/Wilsonbluong/Beach-Resort">
                Source Code
              </ProjectLink>
              <ProjectLink href="https://my-reactjs-beach-resort.netlify.app/">
                See Live
              </ProjectLink>
            </LinkContainer>
          </ImageOverlay>
        </ImageWrap>
        <ImageWrap>
          <SingleProject src="../images/jakeandelwood2.png" />
          <ImageOverlay>
            <ProjectTitle>Jake & Elwood</ProjectTitle>
            <ProjectDesc>
              A mock marketing page using HTML and CSS responsive design.
            </ProjectDesc>
            <LinkContainer>
              <ProjectLink href="https://github.com/Wilsonbluong/marketing-landing-page">
                Source Code
              </ProjectLink>
              <ProjectLink href="https://reverent-benz-ac247b.netlify.app/">
                See Live
              </ProjectLink>
            </LinkContainer>
          </ImageOverlay>
        </ImageWrap>
        <ImageWrap>
          <SingleProject src="../images/moviesdb2.jpg" />
          <ImageOverlay>
            <ProjectTitle>MoviesDb</ProjectTitle>
            <ProjectDesc>
              A react project using a movie database API that shows all the
              current top movies. There is also a search feature, to help you
              find your next movie to watch. Get your popcorn ready, and enjoy
              your movie night!
            </ProjectDesc>
            <LinkContainer>
              <ProjectLink href="https://github.com/Wilsonbluong/Movie-Search-App">
                Source Code
              </ProjectLink>
              <ProjectLink href="https://modest-dubinsky-ef5597.netlify.app/">
                See Live
              </ProjectLink>
            </LinkContainer>
          </ImageOverlay>
        </ImageWrap>
      </ProjectsGridContainer>
    </>
  );
};

export default ProjectsGrid;
