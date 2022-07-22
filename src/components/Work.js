import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { WorkCard } from "./WorkCard";
import { WorkCardData } from "./WorkCardData";

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

export const Work = () => {
  return (
    <WorkContainer>
      <ProjectHeading>Projects</ProjectHeading>
      <ProjectContainer>
        {WorkCardData.map((val, index) => {
          return <WorkCard key={index} imgsrc={val.imgsrc} title={val.title} text={val.text} view={val.view} />;
        })}
      </ProjectContainer>
    </WorkContainer>
  );
};
