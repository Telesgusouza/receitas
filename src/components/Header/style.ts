import styled from "styled-components";

export const Container = styled.header`
  background-color: #0a2e36;
  padding: 16px 8px;

  display: flex;
  justify-content: space-between;


  div {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: white;
  }

  img {
    width: 40px;
  }

  @media (max-width: 550px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;

export const ContainerSearch = styled.form`
  display: flex;

  width: 100%;
  max-width: 270px;

  max-height: 40px;

  label {
    width: 98%;
    position: relative;
  }

  input {
    height: 100%;
    width: 100%;

    border-radius: 50px;
    border: 1px solid white;
    padding: 0 42px 0 15px;

    transition: border 0.18s ease-in-out;

    &:focus {
      outline: 0;

      border: 1px solid #14cc60;
    }
  }

  button {
    background-color: #14cc60;

    position: absolute;
    top: 6px;
    right: 6px;

    height: 28px;
    width: 28px;

    border: none;
    border-radius: 50%;

    padding: 6px;

    cursor: pointer;
  }

  @media (max-width: 550px) {
    height: 39px;

    margin: 0 auto;
    max-width: 100%;
  }
`;
