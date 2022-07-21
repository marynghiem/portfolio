import React, { useState } from "react";
import styled from "styled-components";

const HeroImgContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 60vh;
  position: relative;
  &:before {
    content: "";
    background: url("https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
    background-size: cover;
    background-position: center top;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  h1 {
    font-size: 2.4rem;
    @media (max-width: 640px) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.4rem;
    text-align: center;
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

export const HeroImg2 = ({ heading, text }) => {
  return (
    <HeroImgContainer>
      <Heading>
        <h1>{heading}</h1>
        <p>{text}</p>
      </Heading>
    </HeroImgContainer>
  );
};
