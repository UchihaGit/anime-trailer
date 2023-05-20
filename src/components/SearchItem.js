import React from "react";
import { StyledDiv } from "../styles/Searchitem.styled";
import { useNavigate } from "react-router-dom";

const SearchItem = ({ data }) => {
  const navigate = useNavigate();
  const {
    mal_id,
    title,
    title_japanese,
    title_english: englishTitle,
    images: {
      webp: { image_url },
    },
    aired: { string },
    type,
    duration,
  } = data;
  let animeTitle = englishTitle || title;

  return (
    <StyledDiv onClick={() => navigate(`/${mal_id}`)}>
      <img src={image_url} alt={title} />
      <div>
        <p>
          {animeTitle.length > 20
            ? `${animeTitle.slice(0, 20)}...`
            : animeTitle}
        </p>
        <p>
          {title_japanese.length > 10
            ? `${title_japanese.slice(0, 10)}...`
            : title_japanese}
        </p>
        <div>
          {string.slice(0, string.indexOf(" to"))}
          <span>{type}</span>
          <span>{duration}</span>
        </div>
      </div>
    </StyledDiv>
  );
};

export default SearchItem;
