import React from "react";
import { useSelector } from "react-redux";
import SearchItem from "./SearchItem";

const SearchResult = () => {
  let { animeData, isSearchbarOpen } = useSelector((state) => ({
    animeData: state.getAnime.animeDetails.data,
    isSearchbarOpen: state.searchbar.isSearchbarOpen,
  }));

  animeData = animeData?.slice(0, 5);
  return (
    isSearchbarOpen && (
      <section>
        {animeData?.map((item) => {
          return <SearchItem data={item} />;
        })}
      </section>
    )
  );
};

export default SearchResult;
