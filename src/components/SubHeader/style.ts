import styled from "styled-components";

type Props = {
  bg: string;
};

export const Container = styled.main<Props>`
  padding: 40px 10px;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  max-width: 250px;

  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;

    color: #0a2e36;
  }

  @media (max-width: 750px) {
    width: 90%;
    max-width: fit-content;
    margin: 0 auto;

    h1 {
      text-align: center;
    }
  }
`;

export const OptionRecipe = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  margin-left: 15px;

  width: 100%;
  max-width: 641px;

  overflow: hidden;

  img {
    max-width: 200px;
    height: 340px;
    object-fit: cover;
    border-radius: 30px;

    cursor: pointer;
  }

  @media (max-width: 750px) {
    margin: 0 auto;
    margin-top: 50px;
  }

  @media (max-width: 550px) {
    max-width: 420px;
    img:nth-child(3) {
      display: none;
    }
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    img {
      margin: 0 auto;
      width: 90%;
      max-width: 100%;
      height: 200px;
      object-fit: cover;
    }

    img:nth-child(3) {
      display: block;
    }
  }
`;
