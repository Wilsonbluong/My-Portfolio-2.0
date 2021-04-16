import React from "react";
import ProgressBar from "../ProgressBar";
import { SkillTitle, SkillsContainer } from "./styles/Skills";

const Skills = () => {
  return (
    <>
      <SkillsContainer>
        <SkillTitle>HTML</SkillTitle>
        <ProgressBar done="95" />
        <SkillTitle>CSS</SkillTitle>
        <ProgressBar done="90" />
        <SkillTitle>Javascript (ES6+)</SkillTitle>
        <ProgressBar done="85" />
        <SkillTitle>React</SkillTitle>
        <ProgressBar done="80" />
        <SkillTitle>Node.js</SkillTitle>
        <ProgressBar done="50" />
        <SkillTitle>UX/UI</SkillTitle>
        <ProgressBar done="60" />
        <SkillTitle>Django</SkillTitle>
        <ProgressBar done="65" />
        <SkillTitle>Copy and Paste</SkillTitle>
        <ProgressBar done="99" />
      </SkillsContainer>
    </>
  );
};

export default Skills;
