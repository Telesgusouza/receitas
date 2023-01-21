import * as Styled from "./style";
import logoImg from '../../assets/logoFooter.svg';

export default function Footer() {
  return (
    <Styled.Container>
      <Styled.MoreInformation className="center">
        <div>
            <strong>SOBRE</strong>
            <ul>
                <li>
                    Contato
                </li>
                <li>
                    Quem somos
                </li>
                <li>
                    Parcerias
                </li>
            </ul>
        </div>


        <div>
            <strong>SIGA-NOS</strong>
            <ul>
                <li>
                    Instagram
                </li>
                <li>
                    Twitter
                </li>
                <li>
                    Youtube
                </li>
                <li>
                    Pinterest
                </li>
            </ul>
        </div>

        <div>
            <img src={logoImg} alt="logo do site" />
        </div>
      </Styled.MoreInformation>
    </Styled.Container>
  );
}
