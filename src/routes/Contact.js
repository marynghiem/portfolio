import React from "react";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroImg2 } from "../components/HeroImg2";

export const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="Lets have a chat." />
      <Footer />
    </div>
  );
};
