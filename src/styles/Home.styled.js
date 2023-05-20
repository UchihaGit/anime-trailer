import styled from "styled-components";

export const StyledSection = styled.section`
  height: 40vh;
  width: 100vw;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.5)
    ),
    url(${(props) => props.image});
  background-size: 100vw 50vh;
`;
