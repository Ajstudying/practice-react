import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  div > section {
    width: 65vw;
    margin: auto;
  }
  div > article:nth-of-type(1) {
    background-color: olive;
  }
  div > section > article:nth-of-type(2) {
    width: 80%;
    margin: auto;
    border: 3px solid salmon;
  }
  div > section > article:nth-of-type(2) > ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  div > section > article:nth-of-type(2) > ul > div {
    display: flex;
    justify-content: space-evenly;
  }
  div > section > article:nth-of-type(2) > ul > div > li {
    width: 200px;
    height: 300px;
    list-style: none;
    border: 3px solid green;
  }
`;
