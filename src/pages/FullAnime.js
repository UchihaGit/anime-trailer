import React from "react";
import { useParams } from "react-router-dom";
import { getAnimeFull } from "../assets/services";
import AnimeProfile from "../components/AnimeProfile";

function FullAnime() {
  const { id } = useParams();
  const [data, setData] = React.useState(null);

  React.useEffect(async () => {
    let response = await fetch(getAnimeFull(id));
    let temp = await response.json();
    console.log(temp);
    setData(temp.data);
  }, [id]);

  return (
    <>
      {data && (
        <AnimeProfile
          img={data.images.jpg.large_image_url}
          title={data.title}
          score={data.score}
          status={data.status}
        />
      )}
    </>
  );
}

export default FullAnime;
