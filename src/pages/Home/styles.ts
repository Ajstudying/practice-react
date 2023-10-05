import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  div > article:nth-of-type(1) > div {
    background-color: olive;
    height: 300px;
  }
  div > section {
    width: 60vw;
    border: 2px solid crimson;
    margin: auto;
  }
  div > section > article:nth-of-type(1) > span {
    display: flex;
    justify-content: space-evenly;
  }
  div > section > article:nth-of-type(2) {
    border: 2px solid purple;
  }
  div > section > article:nth-of-type(2) > ul {
    margin: auto;
    background-color: bisque;
  }
  div > section > article:nth-of-type(2) > ul > div {
    display: flex;
  }
  div > section > article:nth-of-type(2) > ul > div > li {
    border: 3px solid green;
    width: 300px;
    list-style: none;
  }
`;
