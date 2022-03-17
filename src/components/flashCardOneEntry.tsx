import React from "react";

type mentaleFlashCard = { question: string; answer: string }[];
type propsFlashCardMentale = { mentaleFlashCardData: mentaleFlashCard };
let number = 0;
const FlashCardOneEntry = ({
  mentaleFlashCardData,
}: propsFlashCardMentale): JSX.Element => {
  const [question, setQuestion] = React.useState(
    mentaleFlashCardData[number].question
  );
  // const [response, setResponse] = React.useState(
  //   mentaleFlashCardData[number].answer
  // );
  // const [affichage, SetAffichage] = React.useState(question);

  return (
    <div className="Contour">
      {question}
      <hr />
      <input type="text"></input>
      <br />
      <button type="submit">Submit</button>
    </div>
  );
};

export default FlashCardOneEntry;
