import React from "react";
import questionAnswer from "../../data/questionAnswer";

const FlashCardMentale = (): JSX.Element => {
  let [showResponse, setShowResponse] = React.useState(true);
  if (showResponse) {
    return (
      <div
        className="Contour"
        onClick={() => setShowResponse((showResponse = false))}
      >
        Quel est la couleur blanc du cheval d'Henri 4 ?
      </div>
    );
  } else {
    return (
      <div
        className="Contour"
        onClick={() => setShowResponse((showResponse = true))}
      >
        Blanc
      </div>
    );
  }
};

export default FlashCardMentale;
