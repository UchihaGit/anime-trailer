import * as actions from "../../utility/actions";

const initialState = {
  isSearchbarOpen: false,
};

const sidebarReducer = (state = initialState, action) => {
  if (action.type === actions.SHOW_SEARCH_BAR) {
    return {
      ...state,
      isSearchbarOpen: true,
    };
  }

  if (action.type === actions.HIDE_SEARCH_BAR) {
    return {
      ...state,
      isSearchbarOpen: false,
    };
  }

  return state;
};

export default sidebarReducer;
