import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
//Project Imports
import { StyledNav, StyledImg, StyledDiv } from "../styles/Navbar.styled";
import { NavMenu, NavOptions } from "../components";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <StyledNav>
      {/* menu and logo starts*/}
      <StyledDiv>
        <NavMenu dispatch={dispatch} />
        <Link to="/">
          <StyledImg src="https://zoro.to/images/logo.png" alt="Zoro logo" />
        </Link>
      </StyledDiv>
      {/* menu and logo ends*/}

      {/* remaining links starts */}
      <NavOptions dispatch={dispatch} />
      {/* remaining links ends*/}
    </StyledNav>
  );
};

export default Navbar;
