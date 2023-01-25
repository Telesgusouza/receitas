import * as Styled from "./style";
import logoImg from "../../assets/logoFooter.svg";

export default function Footer() {
  return (
    <Styled.Container>
      <Styled.MoreInformation className="center">
        <div>
          <strong>ABOUT</strong>
          <ul>
            <li>Contact</li>
            <li>Who we are</li>
            <li>Partnerships</li>
          </ul>
        </div>

        <div>
          <strong>FOLLOW US</strong>
          <ul>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Youtube</li>
            <li>Pinterest</li>
          </ul>
        </div>

        <div>
          <img src={logoImg} alt="logo do site" />
        </div>
      </Styled.MoreInformation>
    </Styled.Container>
  );
}
