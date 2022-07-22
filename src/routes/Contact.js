import React from "react";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroImg2 } from "../components/HeroImg2";
import { Form } from "../components/Form";

export const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="Lets have a chat." />
      <Form />
      <Footer />
    </div>
  );
};
