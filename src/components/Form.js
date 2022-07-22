import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div``;

export const Form = () => {
  return (
    <FormContainer>
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <input rows="6" placeholder="Type your message here"></input>
        <button className="btn">Submit</button>
      </form>
    </FormContainer>
  );
};
