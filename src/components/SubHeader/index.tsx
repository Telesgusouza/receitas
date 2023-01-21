import * as Styled from "./style";
import bg from "../../assets/Capa.png";

import dish from "../../assets/Vegan-Coconut-Curry-5 1.png";

export default function SubHeader() {
  return (
    <Styled.Container bg={bg}>
      <Styled.ContentContainer className="center">
        <Styled.Content>
          <h1>
            confira uma de nossas receita de um deliciosa de curry vegano!
          </h1>
        </Styled.Content>

        <Styled.OptionRecipe>
          <img src={dish} alt="foto de prato principal do dia" />
          <img src={dish} alt="foto de prato principal do dia" />
          <img src={dish} alt="foto de prato principal do dia" />
        </Styled.OptionRecipe>
      </Styled.ContentContainer>
    </Styled.Container>
  );
}
