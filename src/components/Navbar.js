import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const NavMenu = styled.ul`
  display: flex;
  @media (max-width: 1040px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -3;
  }
`;
const NavMenuListItem = styled.li`
  padding: 0 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  @media (max-width: 1040px) {
    padding: 1rem 0;
    font-size: 2rem;
  }
`;

export const Navbar = () => {
  return (
    <Header>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <NavMenu>
        <NavMenuListItem>
          <Link to="/">Home</Link>
        </NavMenuListItem>
        <NavMenuListItem>
          <Link to="/project">Project</Link>
        </NavMenuListItem>
        <NavMenuListItem>
          <Link to="/about">About</Link>
        </NavMenuListItem>
        <NavMenuListItem>
          <Link to="/contact">Contact</Link>
        </NavMenuListItem>
      </NavMenu>
    </Header>
  );
};
