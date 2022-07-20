import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Hero = styled.div`
  height: 100%;
  width: 100%;
`;
const Mask = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.8;
  }
`;
const IntroImage = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  object-fit: cover;
`;
const Content = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  text-align: center;
  h1 {
    font-size: 4rem;
    padding: 0.6rem 0 1.5rem;
    @media (max-width: 640px) {
      font-size: 3rem;
    }
  }
  p {
    font-size: 1.4rem;
    font-weight: 200;
    text-transform: uppercase;
    @media (max-width: 640px) {
      font-size: 1.4rem;
    }
  }
  .btn {
    margin: 1rem 0.2rem;
  }
`;
export const HeroImg = () => {
  return (
    <Hero>
      <Mask>
        <IntroImage src="coding.jpeg" alt="coding image"></IntroImage>
      </Mask>
      <Content>
        <p> HI, I'M A FREELANCER.</p>
        <h1>React Developer.</h1>
        <Link to="/project" className="btn">
          Projects
        </Link>
        <Link to="/contact" className="btn btn-light">
          Contact
        </Link>
      </Content>
    </Hero>
  );
};
