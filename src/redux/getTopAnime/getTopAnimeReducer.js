import * as actions from "../../utility/actions";

const initialState = {
  loading: false,
  error: "",
  topAnime: [],
};

const getTopAnimeReducer = (state = initialState, action) => {
  if (action.type === actions.SET_TOP_ANIME_ATTEMPT) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === actions.SET_TOP_ANIME_SUCCESS) {
    return {
      ...state,
      loading: false,
      topAnime: action.payload,
    };
  }
  if (action.type === actions.SET_TOP_ANIME_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};

export default getTopAnimeReducer;
