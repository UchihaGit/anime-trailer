import React from "react";
import { FiFilm } from "react-icons/fi";
import { BsBroadcast } from "react-icons/bs";
import { FaRandom } from "react-icons/fa";
import styled from "styled-components";

const WatchingOptions = () => {
  return (
    <StyledDiv>
      <div>
        <BsBroadcast className="icons" />
        <div>Watch2gether</div>
      </div>
      <div>
        <FaRandom className="icons" />
        <div>Random</div>
      </div>

      <div>
        <FiFilm className="icons" />
        <div>Anime Name</div>
      </div>
    </StyledDiv>
  );
};

export default WatchingOptions;

const StyledDiv = styled.div`
  margin-top: 1.5rem;
  display: flex;
  text-align: center;
  font-size: 0.8rem;
  justify-content: space-around;
  padding: 1rem 0.5rem;
  background-color: rgba(0, 0, 0, 0.2);
  .icons {
    color: #cae962;
    font-size: 1.2rem;
  }
`;
