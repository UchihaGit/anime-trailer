import React from "react";
import menuOptions from "../assets/sideBarData";
import { StyledButton } from "../styles/Common.styled";
import { StyledAside } from "../styles/Navbar.styled";
import { BiChevronLeft } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { hideSideBar } from "../redux/sidebar/sidebarActions";
import WatchingOptions from "./WatchingOptions";

const NavSideBar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();

  return (
    <StyledAside className={`${isSidebarOpen ? "show" : "hide"}`}>
      <StyledButton onClick={() => dispatch(hideSideBar())}>
        <BiChevronLeft /> Close menu
      </StyledButton>
      <WatchingOptions />
      <ul>
        {menuOptions.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </StyledAside>
  );
};

export default NavSideBar;
