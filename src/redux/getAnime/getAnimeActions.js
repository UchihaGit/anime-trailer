import { getAnimeByName } from "../../assets/services";
import * as actions from "../../utility/actions";

export const setAnimeDataAttempt = () => {
  return {
    type: actions.SET_ANIME_ATTEMPT,
  };
};

export const setAnimeDataSuccess = (data) => {
  return {
    type: actions.SET_ANIME_SUCCESS,
    payload: data,
  };
};

export const setAnimeDataError = (error) => {
  return {
    type: actions.SET_ANIME_ERROR,
    payload: error,
  };
};

export const retriveAnimeByName = (anime) => {
  return (dispatch) => {
    dispatch(setAnimeDataAttempt());
    fetch(getAnimeByName(anime))
      .then((response) => response.json())
      .then((data) => dispatch(setAnimeDataSuccess(data)))
      .catch((err) => dispatch(setAnimeDataError(err)));
  };
};
