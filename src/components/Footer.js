import React, { useState } from "react";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
import styled from "styled-components";

const WholeFooter = styled.div``;
const FooterContainer = styled.div``;
const Left = styled.div``;
const Right = styled.div``;
const Location = styled.div``;
const Phone = styled.div``;
const Email = styled.div``;

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
        <Right></Right>
      </FooterContainer>
    </WholeFooter>
  );
};
