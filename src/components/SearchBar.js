import React, { useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { retriveAnimeByName } from "../redux/getAnime/getAnimeActions";
import { StyledForm } from "../styles/Searchbar.styled";
import { debounce } from "../utility/debounce";
import SearchResult from "./SearchResult";

const SearchBar = () => {
  const isSearchbarOpen = useSelector(
    (state) => state.searchbar.isSearchbarOpen
  );
  const [anime, setAnime] = useState();

  const dispatch = useDispatch();

  const onChangeHandler = (value) => {
    //TODO: remove api call for empty value
    setAnime(value);
    const optimisedFun = debounce(retriveAnimeByName(value));
    optimisedFun(dispatch);
  };

  return (
    <>
      <StyledForm className={`${isSearchbarOpen ? "" : "hide-searchbar"}`}>
        <button>
          <FaFilter />
        </button>
        <div>
          <input
            type="text"
            value={anime}
            placeholder="Search anime..."
            onChange={(e) => onChangeHandler(e.target.value)}
          />
          <button onClick={() => dispatch(retriveAnimeByName(anime))}>
            <FaSearch />
          </button>
        </div>
      </StyledForm>
      <SearchResult />
    </>
  );
};

export default SearchBar;
