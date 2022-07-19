import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div``;

export const Navbar = () => {
  return (
    <Header>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
    </Header>
  );
};
