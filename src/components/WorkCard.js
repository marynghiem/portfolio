import React, { useState } from "react";
import styled from "styled-components";

const WorkContainer = styled.div``;
const ProjectHeading = styled.h1``;
const ProjectContainer = styled.div``;
const ProjectCard = styled.div``;
const ProjectTitle = styled.h2``;

export const WorkCard = () => {
  return (
    <WorkContainer>
      <ProjectHeading>Projects</ProjectHeading>
      <ProjectContainer>
        <ProjectCard>
          <img src="" alt="image" />
        </ProjectCard>
      </ProjectContainer>
    </WorkContainer>
  );
};
