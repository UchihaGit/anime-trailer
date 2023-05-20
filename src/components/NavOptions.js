import React, { useState } from "react";
import { StyledUl } from "../styles/Navbar.styled";
import { FaSearch, FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { showORhideSearchBar } from "../redux/searchbar/searchbarActions";

const NavOptions = ({ dispatch }) => {
  const [isVisible, setVisible] = useState(true);

  const searchbarModalHandler = () => {
    setVisible(!isVisible);
    dispatch(showORhideSearchBar(isVisible));
  };

  return (
    <StyledUl>
      <li onClick={searchbarModalHandler}>
        <FaSearch />
        {/* <SearchBar /> */}
      </li>
      <li>
        <FaBell />
      </li>
      <li>
        <CgProfile />
      </li>
    </StyledUl>
  );
};

export default NavOptions;
