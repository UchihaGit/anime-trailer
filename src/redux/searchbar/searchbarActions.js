import * as actions from "../../utility/actions";

export const showORhideSearchBar = (isVisible) => {
  if (isVisible) {
    return {
      type: actions.SHOW_SEARCH_BAR,
    };
  } else {
    return {
      type: actions.HIDE_SEARCH_BAR,
    };
  }
};
