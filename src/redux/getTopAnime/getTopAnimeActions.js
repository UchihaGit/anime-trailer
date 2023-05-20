import { getTopAnime } from "../../assets/services";
import * as actions from "../../utility/actions";

export const setTopAnimeAttempt = () => {
  return {
    type: actions.SET_TOP_ANIME_ATTEMPT,
  };
};

export const setTopAnimeSuccess = (data) => {
  return {
    type: actions.SET_TOP_ANIME_SUCCESS,
    payload: data,
  };
};

export const setTopAnimeError = () => {
  return actions.SET_TOP_ANIME_ERROR;
};

export const getTopAnimeData = () => {
  return (dispatch) => {
    dispatch(setTopAnimeAttempt);
    fetch(getTopAnime())
      .then((response) => response.json())
      .then((data) => dispatch(setTopAnimeSuccess(data)))
      .catch((error) => dispatch(setTopAnimeError(error)));
  };
};
