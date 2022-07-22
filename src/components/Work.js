import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const WorkContainer = styled.div``;
const ProjectHeading = styled.h1`
  text-align: center;
  padding: 4rem 0 2rem 0;
`;
const ProjectContainer = styled.div`
  max-width: 1140px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  padding-bottom: 5rem;
  @media (max-width: 740px) {
    max-width: 90%;
    margin: auto;
    grid-template-columns: 1fr;
  }
`;
const ProjectCard = styled.div`
  background: #1a1919;
  padding: 1.2rem 1rem;
  img {
    width: 100%;
  }
`;
const ProjectTitle = styled.h2`
  color: #fff;
  padding: 1rem 0;
`;
const ProjectDetails = styled.div`
  p {
    padding-bottom: 1rem;
    font-size: 1.1rem;
    text-align: justify;
  }
`;
const ProjectButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  .btn {
    padding: 0.5rem 1rem;
  }
`;

export const Work = () => {
  return (
    <WorkContainer>
      <ProjectHeading>Projects</ProjectHeading>
      <ProjectContainer></ProjectContainer>
    </WorkContainer>
  );
};
