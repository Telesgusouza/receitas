import styled from "styled-components";

export const Container = styled.footer`
  background-color: #0a2e36;
`;

export const MoreInformation = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;

  strong {
    color: white;
    font-size: 1.1rem;
  }

  ul {
    list-style: none;
    display: grid;
    grid-gap: 5px;
    margin: 8px 0 0 10px;
  }

  li {
    color: #14cc60;
    font-size: 0.85rem;
  }

  div:nth-child(3) {
    display: flex;
    align-items: center;
  }

  img {
    height: fit-content;
    width: 100px;
  }

  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;

    ul {
      margin: 7px 0 20px 0;
    }
    img {
        margin: 0 auto;
    }
  }
`;
