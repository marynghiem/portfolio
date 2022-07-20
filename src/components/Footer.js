import React, { useState } from "react";
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const WholeFooter = styled.div`
  width: 100%;
`;
const FooterContainer = styled.div``;
const Left = styled.div``;
const Right = styled.div``;
const Location = styled.div``;
const Phone = styled.div``;
const Email = styled.div``;
const Social = styled.div``;

export const Footer = () => {
  return (
    <WholeFooter>
      <FooterContainer>
        <Left>
          <Location>
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>San Jose.</p>
              <p>California, United States.</p>
            </div>
          </Location>
          <Phone>
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              1-408-599-4331
            </h4>
          </Phone>
          <Email>
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              marynghiem46@gmail.com
            </h4>
          </Email>
        </Left>
        <Right>
          <h4>About Me</h4>
          <p>
            I am currently a year into my coding journey which started with FreeCodeCamp and learning
            HTML/CSS/Javascript and React.js. I then learned CS fundamentals by completing the Harvard CS 50 course. I
            am now actively building web applications using React.js to create enjoyable websites for users. In my
            newest project I am collaborating with multiple industry full stack engineers to build a Pictionary game
            with a Pokemon theme!
          </p>
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
