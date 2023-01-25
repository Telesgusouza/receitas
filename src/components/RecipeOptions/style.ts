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

  @media (max-width: 425px) {
    width: 80%;
    padding: 8px 0px;
    text-align: center;

    display: flex;
    justify-content: center;

    p {
      font-size: 13px;
      padding: 0 7px;
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

  strong {
    color: #14cc60;

  }

  p {
    margin-top: 4px;
    font-size: 14px;
  }


  transition: scale 0.18s ease-in-out;

  &:hover {
    scale: 1.01;
  }
`;
