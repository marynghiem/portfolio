import React, { useState } from "react";
import styled from "styled-components";

const HeroImgContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 60vh;
  position: relative;
  &:before {
    content: "";
  }
`;
const Heading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroImg2 = () => {
  return (
    <HeroImgContainer>
      <Heading>
        <h1>This is a heading</h1>
        <p>This is a text</p>
      </Heading>
    </HeroImgContainer>
  );
};
