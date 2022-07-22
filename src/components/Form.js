import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  label {
    color: #fff;
    margin-bottom: 0.5rem;
  }
  form {
    display: flex;
    flex-direction: column;
    padding: 4rem 1rem;
    margin: auto;
    max-width: 600px;
  }
  form input,
  form textarea {
    margin-bottom: 1rem;
    padding: 10px 18px;
    font-size: 1.2rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.1);
    color: #f4f4f4;
  }
`;

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
