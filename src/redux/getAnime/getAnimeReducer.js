import * as actions from "../../utility/actions";

const initialState = {
  loading: false,
  error: "",
  animeDetails: [],
};

const getAnimeReducer = (state = initialState, action) => {
  if (action.type === actions.SET_ANIME_ATTEMPT) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === actions.SET_ANIME_SUCCESS) {
    return {
      ...state,
      loading: false,
      animeDetails: action.payload,
    };
  }
  if (action.type === actions.SET_ANIME_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};

export default getAnimeReducer;
