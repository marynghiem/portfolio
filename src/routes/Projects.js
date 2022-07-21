import React from "react";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroImg2 } from "../components/HeroImg2";

export const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works." />
      <Footer />
    </div>
  );
};
