import React, { useState } from "react";
import styled from "styled-components";

const WholeFooter = styled.div``;
const FooterContainer = styled.div``;
const Left = styled.div``;
const Right = styled.div``;
const Location = styled.div``;

export const Footer = () => {
  return (
    <WholeFooter>
      <FooterContainer>
        <Left></Left>
        <Right></Right>
      </FooterContainer>
    </WholeFooter>
  );
};
