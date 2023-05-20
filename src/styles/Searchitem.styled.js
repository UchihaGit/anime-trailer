import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: #4a4b51;
  display: flex;
  align-items: center;
  color: white;
  height: 6rem;
  border: 0;
  letter-spacing: 0.1rem;
  word-spacing: -1px;
  font-size: 0.8rem;
  border-bottom: 1px solid #4a4b51;
  border-style: dashed;
  img {
    width: 2.8rem;
    height: 3.8rem;
    object-fit: contain;
    display: block;
    margin-left: 1rem;
  }
  div {
    width: 80%;
    margin-left: 2rem;
    line-height: 0.5rem;
    p:first-child {
      font-weight: bolder;
    }
    p {
      xdisplay: flex;
      align-items: center;
      margin: 0;
      margin-bottom: 0.4rem;
      padding: 0;
    }
    div {
      padding: 0;
      margin: 0;
      xdisplay: flex;
      xalign-items: center;
      justify-content: space-around;
      xflex-wrap: nowrap;
      width: 80%;
      text-align: start;
      span {
        width: 40%;
      }
    }

    div span::before {
      content: "\ffed";
      margin-right: 0.25rem;
      border-radius: 50%;
    }
  }
`;
