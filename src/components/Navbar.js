import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: fixed;
  width: 100%;
  height: 90px;
  z-index: 10;
`;
const HeaderBackground = styled(Header)`
  background-color: rgba(0, 0, 0, 0.85);
  transition: 0.5s;
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
    left: -100%;
    z-index: -3;
  }
`;
const NavMenuClicked = styled(NavMenu)`
  left: 0;
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

const Hamburger = styled.div`
  display: none;
  @media (max-width: 1040px) {
    display: initial;
  }
`;

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      {color ? (
        <HeaderBackground>
          <Link to="/">
            <h1>Portfolio</h1>
          </Link>
          {click ? (
            <NavMenuClicked>
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
            </NavMenuClicked>
          ) : (
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
          )}
          <Hamburger onClick={handleClick}>
            {click ? <FaTimes size={20} style={{ color: "#fff" }} /> : <FaBars size={20} style={{ color: "#fff" }} />}
          </Hamburger>
        </HeaderBackground>
      ) : (
        <Header>
          <Link to="/">
            <h1>Portfolio</h1>
          </Link>
          {click ? (
            <NavMenuClicked>
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
            </NavMenuClicked>
          ) : (
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
          )}
          <Hamburger onClick={handleClick}>
            {click ? <FaTimes size={20} style={{ color: "#fff" }} /> : <FaBars size={20} style={{ color: "#fff" }} />}
          </Hamburger>
        </Header>
      )}
    </>
  );
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
