import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

export const WorkCard = ({ imgsrc, title, text, view }) => {
  return (
    <ProjectCard>
      <img src={imgsrc} alt="image" />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDetails>
        <p>{text}</p>
        <ProjectButtons>
          <NavLink to={view} className="btn">
            View
          </NavLink>
          <NavLink to="url.com" className="btn">
            Source
          </NavLink>
        </ProjectButtons>
      </ProjectDetails>
    </ProjectCard>
  );
};
