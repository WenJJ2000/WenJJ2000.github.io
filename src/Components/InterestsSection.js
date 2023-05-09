import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import InterestCard from "./InterestCard";
import ROBOT from "../img/robot_logo.png";
import design from "../img/design.svg";
import gamedev from "../img/game-dev.svg";

const InterestsSection = () => (
  <InnerLayout>
    <InterestSectionStyled>
      <Title title="Interests" span="interests" />
      <div className="interests">
        <InterestCard image={ROBOT} title="Robotics" />
        <div className="mid-card">
          <InterestCard image={design} title="Software Engineering" />
        </div>
        <InterestCard image={gamedev} title="Graphic Design" />
      </div>
    </InterestSectionStyled>
  </InnerLayout>
);

const InterestSectionStyled = styled.section`
  .interests {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default InterestsSection;
