import styled from "styled-components";

export const Container = styled.section``;

export const ContainerFilter = styled.div`
  width: fit-content;
  margin: 30px auto 40px auto;
  padding: 8px 40px;

  display: flex;

  border: 1px solid #14cc60;
  border-radius: 20px;
  background-color: white;

  p {
    width: fit-content;
    border-right: 1px solid #14cc60;
    padding: 0 10px;

    font-weight: 700;
    font-size: 15px;

    color: #14cc60;
    cursor: pointer;

    &:nth-child(4) {
      border-right: none;
    }
  }
`;

export const ListRecipe = styled.ul`
  list-style: none;
  margin-bottom: 50px;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
`;
export const OptionRecipe = styled.li`
  display: flex;
  background-color: white;
  padding: 8px;
  border-radius: 4px;

  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }

  div {
    margin-left: 14px;
    width: 100%;
  }

  ul {
    list-style: none;
    display: flex;
    margin-top: 4px;
  }

  li {
    margin-right: 10px;

    font-size: 14px;
  }

  transition: scale 0.18s ease-in-out;

  &:hover {
    scale: 1.01;
  }
`;
