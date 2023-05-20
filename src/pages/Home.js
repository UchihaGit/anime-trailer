import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StyledSection } from "../styles/Home.styled";
const Home = () => {
  let topAnimeData = useSelector((state) => state.getTopAnime.topAnime.data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      //console.log(index);
      index == 9 ? setIndex(0) : setIndex(index + 1);
    }, 2000);

    return () => clearInterval(id);
  }, [index]);

  if (!topAnimeData) return <p>Loading!!!</p>;

  topAnimeData = topAnimeData?.slice(0, 10);

  const {
    images: {
      webp: { large_image_url: image },
    },
  } = topAnimeData && topAnimeData[index];

  return <StyledSection image={image}></StyledSection>;
};

export default Home;
