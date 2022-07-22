import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AboutContainer = styled.div``;
const Left = styled.div``;
const Right = styled.div``;
const ImageContainer = styled.div``;
const ImageStack = styled.div``;
const Image = styled.img``;

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
      <Right>
        <ImageContainer>
          <ImageStack className="top">
            <Image src="coding.jpg" alt="true"></Image>
          </ImageStack>
          <ImageStack className="bottom">
            <Image src="coding.jpg" alt="true"></Image>
          </ImageStack>
        </ImageContainer>
      </Right>
    </AboutContainer>
  );
};
