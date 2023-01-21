import * as Styled from "./style";
import logo from "../../assets/LogoHeader.png";
import searchImg from "../../assets/search.svg";

export default function Header() {
  return (
    <Styled.Container>
      <div>
        <img src={logo} alt="logo do site" />
        <h1>confort food</h1>
      </div>

      <Styled.ContainerSearch>
        <label>
          <input type="text" placeholder="Pesquise uma receita" />
          <button>
            <img src={searchImg} alt="botão de pesquisa" />
          </button>
        </label>
      </Styled.ContainerSearch>
    </Styled.Container>
  );
}
