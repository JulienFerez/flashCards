import React from "react";

type mentaleFlashCard = { question: string; answer: string }[];
type propsFlashCardMentale = { mentaleFlashCardData: mentaleFlashCard };

const FlashCardMentale = ({
  mentaleFlashCardData,
}: propsFlashCardMentale): JSX.Element => {
  let [showResponse, setShowResponse] = React.useState(true);
  let [generateNumberRandom, setGenerateNumbeerRandom] = React.useState(false);

  console.log("True or False GenerateRandom", generateNumberRandom);

  function numberAleatoire(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let number = numberAleatoire(0, 2);
  if (generateNumberRandom === true) {
    numberAleatoire(0, 2);
    number = numberAleatoire(0, 2);
  } else {
    console.log("consoleLog retour du else");
  }

  // const number = numberAleatoire(0, 2);
  console.log("randome numbeer", number);

  const goodQuestion = mentaleFlashCardData[number].question;
  // console.log(goodQuestion);
  const goodAnswer = mentaleFlashCardData[number].answer;
  // console.log(goodAnswer);

  if (showResponse) {
    return (
      <div
        className="Contour"
        onClick={(event) => {
          setShowResponse((showResponse = false));
          setGenerateNumbeerRandom(true);
        }}
      >
        {goodQuestion}
      </div>
    );
  } else {
    return (
      <div
        className="Contour"
        onClick={() => {
          setShowResponse((showResponse = true));
        }}
      >
        {goodAnswer}
        <p></p>
        <p>
          <button onClick={() => setGenerateNumbeerRandom(true)}>Next</button>
        </p>
      </div>
    );
  }
};

export default FlashCardMentale;
