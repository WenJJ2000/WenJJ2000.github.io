import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "./ProgressBar";

const Skills = () => (
  <SkillsStyled>
    <Title title={"My Skills"} span={"my skills"} />
    <InnerLayout>
      <div className="skills">
        <ProgressBar title={"Arduino"} width={"100%"} />
        <ProgressBar title={"C++"} width={"80%"} />
        <ProgressBar title={"CSS"} width={"80%"} />
        <ProgressBar title={"Git"} width={"90%"} />
        <ProgressBar title={"Python"} width={"70%"} />
        <ProgressBar title={"HTMl"} width={"80%"} />
        <ProgressBar title={"Java"} width={"70%"} />
        <ProgressBar title={"JAVASCRIPT"} width={"80%"} />
        <ProgressBar title={"Node JS"} width={"75%"} />
        <ProgressBar title={"Photoshop"} width={"70%"} />
        <ProgressBar title={"PostgreSQL"} width={"70%"} />
        <ProgressBar title={"React JS"} width={"80%"} />
        <ProgressBar title={"ROS2"} width={"70%"} />
        <ProgressBar title={"Solidworks"} width={"100%"} />
      </div>
    </InnerLayout>
  </SkillsStyled>
);

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
