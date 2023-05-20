import styled from "styled-components";

export const StyledButton = styled.button`
  margin: 1rem 0 0 1rem;
  background-color: ${(props) => props.color || "#4a4b51"};
  color: white;
  border: 0;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 1rem;
  display: flex;
  letter-spacing: 0.1rem;
  align-items: center;
`;

//////////////margin collapsing
