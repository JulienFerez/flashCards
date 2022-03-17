import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import FlashCardMentale from "./components/flashCardMentale";
import FlashCardOneEntry from "./components/flashCardOneEntry";
import FlashCardResponseMultiple from "./components/flashCardOneEntry";
import { arrayData } from "./data/questionAnswer";

function App() {
  return (
    <>
      <FlashCardMentale mentaleFlashCardData={arrayData} />

      <FlashCardOneEntry mentaleFlashCardData={arrayData} />

      {/* <FlashCardResponseMultiple /> */}
    </>
  );
}

export default App;
