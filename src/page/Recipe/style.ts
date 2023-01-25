import styled from "styled-components";

export const Container = styled.div``;

export const InfoRecipe = styled.div `
margin-bottom: 20px;
display: grid;
grid-gap: 5px;
`;

export const ContentRecipe = styled.main`
  max-width: 700px;
  margin-top: 40px;
  margin-bottom: 50px;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  strong {
    color: #036D19;
  }

  p {
    color: #14cc60;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }

  li {
    color: #14cc60;
  }

  h1 {
    color: #0a2e36;
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 20px;

    padding: 8px 25px;

    position: relative;
    z-index: 10;
  }

  h2 {
    color: #0a2e36;
    margin-bottom: 6px;
  }
`;
