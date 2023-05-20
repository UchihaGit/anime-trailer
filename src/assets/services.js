const basePath = "https://api.jikan.moe/v4";

export const getAnimeByName = (name = "Naruto") => {
  return `${basePath}/anime?q=${name}`;
};

export const getAnimeFull = (id) => {
  return `${basePath}/anime/${id}/full`;
};

export const getTopAnime = () => {
  return `${basePath}/top/anime`;
};
