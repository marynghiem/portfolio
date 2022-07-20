import React, { useState } from "react";
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const WholeFooter = styled.div`
  width: 100%;
  padding: 6rem 0;
  background-color: rgba(19, 19, 19, 0.8);
`;
const FooterContainer = styled.div`
  max-width: 1140px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
const Left = styled.div`
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const Right = styled.div`
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const Location = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
  p {
    line-height: 30px;
  }
`;
const Phone = styled.div``;
const Email = styled.div``;
const Social = styled.div`
  margin-top: 1rem;
`;

const BoldWordsStyling = styled.h4`
  font-size: 1.2rem;
  padding-bottom: 0.7rem;
`;
const Paragraph = styled.p`
  font-size: 1.2rem;
`;

export const Footer = () => {
  return (
    <WholeFooter>
      <FooterContainer>
        <Left>
          <Location>
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <Paragraph>San Jose.</Paragraph>
              <Paragraph>California, United States.</Paragraph>
            </div>
          </Location>
          <Phone>
            <BoldWordsStyling>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              1-408-599-4331
            </BoldWordsStyling>
          </Phone>
          <Email>
            <BoldWordsStyling>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              marynghiem46@gmail.com
            </BoldWordsStyling>
          </Email>
        </Left>
        <Right>
          <BoldWordsStyling>About Me</BoldWordsStyling>
          <Paragraph>
            My name is Mary Nghiem. I am currently a year into my coding journey which started with FreeCodeCamp and
            learning HTML/CSS/Javascript and React.js. I then learned CS fundamentals by completing the Harvard CS 50
            course. I am now actively building web applications using React.js to create enjoyable websites for users.
            In my newest project I am collaborating with multiple industry full stack engineers to build a Pictionary
            game with a Pokemon theme!
          </Paragraph>
          <Social>
            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          </Social>
        </Right>
      </FooterContainer>
    </WholeFooter>
  );
};
