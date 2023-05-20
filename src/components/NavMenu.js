import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { showSideBar } from "../redux/sidebar/sidebarActions";
import { StyledButton } from "../styles/Navbar.styled";

const NavMenu = ({ dispatch }) => {
  return (
    <StyledButton>
      <GiHamburgerMenu onClick={() => dispatch(showSideBar())} />
    </StyledButton>
  );
};

export default NavMenu;
