import * as actions from "../../utility/actions";

export const showSideBar = () => {
  return {
    type: actions.SHOW_SIDE_BAR,
  };
};

export const hideSideBar = () => {
  return {
    type: actions.HIDE_SIDE_BAR,
  };
};
