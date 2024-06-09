import { ButtonContainer, CardContainer, IconContainer } from "./Home.Styles";
import iconStarImg from "../assets/icon-star.svg";

export function Home() {
  return (
    <CardContainer>
      <IconContainer>
        <img src={iconStarImg} alt="icone de estrela" />
      </IconContainer>


      <h1>como foi o atendimento ?</h1>
      <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

      <ButtonContainer>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </ButtonContainer>

      <button>enviar</button>
    </CardContainer>
  );
}
