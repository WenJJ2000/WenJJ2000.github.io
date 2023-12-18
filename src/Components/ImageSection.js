import React from "react";
import styled from "styled-components";
import Fullbody from "../img/fullbody.JPG";

const ImageSection = () => (
  <ImageSectionStyled>
    <div className="left-content">
      <img src={Fullbody} alt="" />
    </div>
    <div className="right-content">
      <h4>
        I am <span>Jun Jie</span>
      </h4>
      <p className="paragraph">
        My Speciality is in Robotics. Beyond Robotics, I am also interested in
        upcoming technologies such as Machine Learning and Artificial
        Intelligence. I also have a keen interest in Computer Science,
        especially full stack development.
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
