import { ButtonContainer, CardContainer, IconContainer, ResulContainer } from "./Home.Styles";
import iconStarImg from "../assets/icon-star.svg";
import thankYouImg from "../assets/illustration-thank-you.svg";

export function Home() {
  let aparecerResutado = true

  return (
    aparecerResutado === false ? (
      <CardContainer>
      <IconContainer>
        <img src={iconStarImg} alt="icone de estrela" />
      </IconContainer>


      <h1>como foi o atendimento ?</h1>
      <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

      <ButtonContainer>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </ButtonContainer>

      <button>enviar</button>
    </CardContainer>
    ) : (
      <CardContainer>
        <img src={thankYouImg} alt="imagem so agradece" />

        <ResulContainer>
          <p>você selecionou 4 de 5</p>
        </ResulContainer>

        <h1>obrigado!</h1>

        <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
      </CardContainer>
    )
  )
}
