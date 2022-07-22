import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AboutContainer = styled.div``;
const Left = styled.div``;

export const AboutContent = () => {
  return (
    <AboutContainer>
      <Left>
        <h1>Who Am I?</h1>
        <p>
          My name is Mary Nghiem. I am a react front-end developer. I create responsive and secure websites. I am
          currently a year into my coding journey which started with FreeCodeCamp and learning HTML/CSS/Javascript and
          React.js. I then learned CS fundamentals by completing the Harvard CS 50 course. I am now actively building
          web applications using React.js to create enjoyable websites for users. In my newest project I am
          collaborating with multiple industry full stack engineers to build a Pictionary game with a Pokemon theme!
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </Left>
    </AboutContainer>
  );
};
