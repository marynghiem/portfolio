import React from "react";
import styled from "styled-components";
import { HeroImg } from "../components/HeroImg";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
    </div>
  );
};
