import React from "react";
import styled from "styled-components";
import { HeroImg } from "../components/HeroImg";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Footer />
    </div>
  );
};
