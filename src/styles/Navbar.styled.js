import styled from "styled-components";

export const StyledNav = styled.nav`
  border: 0;
  margin: 0;
  outline: 0;
  position: relative;
  font-size: 1.5rem;
  background-color: #2a2c31;
  display: flex;
  justify-content: space-between;
  color: white;
  height: 3.1rem;
  align-items: center;
`;

export const StyledImg = styled.img`
  width: 113px;
  height: 35px;
`;

export const StyledUl = styled.ul`
  li {
    list-style-type: none;
    display: inline-block;
    padding: 0 0.6rem;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.4rem;
`;

export const StyledButton = styled.button`
  padding: 0 0.8rem;
  margin-top: 0;
  font-size: 1.5rem;
  background: none;
  color: white;
  border: 0;
  position: relative;
  top: 0;
`;

export const StyledAside = styled.aside`
  position: absolute;
  top: 0;
  border: 0;
  margin: 0;
  outline: 0;
  width: 80vw;
  height: 100vh;
  background-color: #2a2c31;
  color: white;
  transition: transform 0.3s linear;
  ul {
    padding: 0;
  }
  ul li {
    list-style-type: none;
    text-align: left;
    padding: 1rem 0.5rem;
    border-bottom: 1px solid #4a4b51;
    font-weight: bold;
  }

  @media (min-width: 769px) {
    width: 30vw;
  }
`;
