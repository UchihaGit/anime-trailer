import React from "react";
import { StyledSection } from "../styles/searchResult.styled";
import { StyledButton } from "../styles/Common.styled";

const AnimeProfile = ({ img, title, score, status }) => {
  return (
    <StyledSection>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <ul>
        <li>{score}</li>
        <li>{status}</li>
      </ul>
      <div>
        <StyledButton color="rgb(212, 230, 153)">watch now</StyledButton>
        <StyledButton>add to list</StyledButton>
      </div>
    </StyledSection>
  );
};

export default AnimeProfile;
