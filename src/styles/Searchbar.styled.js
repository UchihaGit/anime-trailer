import styled from "styled-components";

export const StyledForm = styled.form`
  z-index: 10;
  background-color: #2a2c31;
  padding: 0.5rem 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  button,
  div {
    padding: 0.5rem 0;
  }
  button {
    color: white;
    border: 0;
    background-color: #4a4b51;
    width: 10%;
  }
  div {
    width: 80%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    input,
    button {
      height: 100%;
      border-radius: 5px;
    }
    input {
      width: 80%;
      padding: 0.3rem 0;
      border: 0;
      outline: none;
      input::placeholder {
        margin-left: 0.2rem;
      }
    }
    button {
      width: 10%;
      padding: 0.2rem 0;
      color: black;
      background-color: inherit;
    }
  }
`;
