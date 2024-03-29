import React from "react";
import styled from "styled-components";
import { GitHub, LinkedIn } from "@mui/icons-material";
import Particle from "../Components/Particle";

const HomePage = () => (
  <HomePageStyled>
    <div className="particle-con">
      <Particle />
    </div>
    <div className="typography">
      <h1>
        Hi, I'm <span>Jun Jie</span>
      </h1>
      <p>
        As a Biomedical Engineer with a keen interest in Robotics and Software
        Engineering, I strive to develop both hardware and software for
        Robotics. This portfolio showcases my skills and expertise in both
        fields.
      </p>
      <div className="icons">
        <a href="https://github.com/wenjj2000" className="icon i-github">
          <GitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/jun-jie-wen"
          className="icon i-linkedin"
        >
          <LinkedIn />
        </a>
      </div>
    </div>
  </HomePageStyled>
);

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
