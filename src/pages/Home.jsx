import { ButtonContainer, CardContainer, IconContainer, ResulContainer } from "./Home.Styles";
import iconStarImg from "../assets/icon-star.svg";
import thankYouImg from "../assets/illustration-thank-you.svg";
import { useState } from "react";

export function Home() {
  const [mostraResutado, setMostrarResutado] = useState(false);
  const [feedbackNote, setFeedbackNote] = useState(0);

  function handleFeedbackButtonClick(event) {
   const feedback = Number(event.target.innerText)


   setFeedbackNote(feedback)
  }


  function handlesubmit() {
    if (feedbackNote === 0) return

    setMostrarResutado(true)
  }

  return (
    mostraResutado === false ? (
      <CardContainer>
        <IconContainer>
          <img src={iconStarImg} alt="icone de estrela" />
        </IconContainer>

        <h1>Como foi o atendimento?</h1>
        <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

        <ButtonContainer>
          <button onClick={handleFeedbackButtonClick}>1</button>
          <button onClick={handleFeedbackButtonClick}>2</button>
          <button onClick={handleFeedbackButtonClick}>3</button>
          <button onClick={handleFeedbackButtonClick}>4</button>
          <button onClick={handleFeedbackButtonClick}>5</button>
        </ButtonContainer>

        <button onClick={handlesubmit}>Enviar</button>
      </CardContainer>
    ) : (
      <CardContainer>
        <ResulContainer>
          <p>você selecionou {feedbackNote} de 5 </p>
        </ResulContainer>
        <img src={thankYouImg} alt="imagem de agradecimento" />

        <h1>Obrigado!</h1>

        <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
      </CardContainer>
    )
  );
}
