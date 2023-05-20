import * as actions from "../../utility/actions";

const initialState = {
  isSidebarOpen: false,
};

const sidebarReducer = (state = initialState, action) => {
  if (action.type === actions.SHOW_SIDE_BAR) {
    return {
      ...state,
      isSidebarOpen: true,
    };
  }

  if (action.type === actions.HIDE_SIDE_BAR) {
    return {
      ...state,
      isSidebarOpen: false,
    };
  }

  return state;
};

export default sidebarReducer;
