import React from "react";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroImg2 } from "../components/HeroImg2";

export const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="I'm a friendly Front-End Developer." />
      <Footer />
    </div>
  );
};
