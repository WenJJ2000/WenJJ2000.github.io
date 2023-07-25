import React from "react";
import styled from "styled-components";

const ImageSection = () => (
  <ImageSectionStyled>
    <div className="left-content">{/* <img src={} alt="" /> */}</div>
    <div className="right-content">
      <h4>
        I am <span>Jun Jie</span>
      </h4>
      <p className="paragraph">
        I am an enthusiastic, self-motivated, reliable, responsible and hard
        working person. Having been put through many stressful situation
        throughout my time in Commando and as the Block Head for Eusoff A block,
        I am able to work well under pressure, being adaptable to all
        challenging situations. With a specialisation in Robotic as well as a
        2nd Major in Computer Science, I want to be able to command both the
        Hardware and Software of Robotics, giving me more flexibility in the
        things I can create.
      </p>
      <div className="about-info">
        <div className="info-title">
          <p>Full Name</p>
          <p>Age</p>
          <p>Nationality </p>
          <p>Languages </p>
          <p>Location</p>
        </div>
        <div className="info">
          <p>: Wen Jun Jie</p>
          <p>: {new Date().getFullYear() - 2000}</p>
          <p>: Singaporean </p>
          <p>: English, Chinese </p>
          <p>: Singapore</p>
        </div>
      </div>
    </div>
  </ImageSectionStyled>
);

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 70%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
