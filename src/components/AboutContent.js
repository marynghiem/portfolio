import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AboutContainer = styled.div`
  width: 100%;
  margin: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
`;
const Left = styled.div`
  text-align: center;
  margin: auto;
  padding: 1rem;
  max-width: 350px;
  p {
    margin: 1.2rem 0;
  }
`;
const Right = styled.div`
  max-width: 700px;
`;
const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: relative;
  align-items: center;
  text-align: center;
`;
const Image = styled.img`
  max-width: 90%;
  border: 1px solid #333;
`;
const ImageTop = styled.div`
  grid-column: 1 / span 8;
  grid-row: 1;
  padding-top: 20%;
  z-index: 6;
`;
const ImageBottom = styled.div`
  grid-column: 4 / -1;
  grid-row: 1;
  z-index: 5;
`;

export const AboutContent = () => {
  return (
    <AboutContainer>
      <Left>
        <h1>Who Am I?</h1>
        <p>My name is Mary Nghiem. I am a react front-end developer. I create responsive and secure websites.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </Left>
      <Right>
        <ImageContainer>
          <ImageTop>
            <Image src="coding.jpg" alt="true"></Image>
          </ImageTop>
          <ImageBottom>
            <Image src="coding.jpg" alt="true"></Image>
          </ImageBottom>
        </ImageContainer>
      </Right>
    </AboutContainer>
  );
};
