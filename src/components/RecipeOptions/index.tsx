import * as Styled from "./style";

import recipeImg from "../../assets/Capa.png";

export default function RecipeOptions() {
  return (
    <Styled.Container className="center">
      <Styled.ContainerFilter>
        <p> Almoço </p>
        <p> Janta </p>
        <p> Fácil </p>
        <p> Rápido </p>
      </Styled.ContainerFilter>

      <Styled.ListRecipe>
        <Styled.OptionRecipe>
          <img src={recipeImg} alt="ilustração da receita" />
          <div>
            <strong>Receita de frando</strong>

            <p>Baixo carboidrato, Mediteranêo, sem amendoin, livre de nozes</p>
          </div>
        </Styled.OptionRecipe>
        <Styled.OptionRecipe>
          <img src={recipeImg} alt="ilustração da receita" />
          <div>
            <strong>Receita de frando</strong>

            <p>Baixo carboidrato, Mediteranêo, sem amendoin, livre de nozes</p>
          </div>
        </Styled.OptionRecipe>
        <Styled.OptionRecipe>
          <img src={recipeImg} alt="ilustração da receita" />
          <div>
            <strong>Receita de frando</strong>

            <p>Baixo carboidrato, Mediteranêo, sem amendoin, livre de nozes</p>
          </div>
        </Styled.OptionRecipe>
        <Styled.OptionRecipe>
          <img src={recipeImg} alt="ilustração da receita" />
          <div>
            <strong>Receita de frando</strong>

            <p>Baixo carboidrato, Mediteranêo, sem amendoin, livre de nozes</p>
          </div>
        </Styled.OptionRecipe>
      </Styled.ListRecipe>
    </Styled.Container>
  );
}
