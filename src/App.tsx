import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import FlashCardMentale from "./components/flashCardMentale";
import FlashCardOneEntry from "./components/flashCardOneEntry";
import FlashCardResponseMultiple from "./components/flashCardResponseMultiple";
import { arrayData } from "./data/questionAnswer";

function App() {
  return (
    <>
      <FlashCardMentale mentaleFlashCardData={arrayData} />

      <FlashCardOneEntry mentaleFlashCardData={arrayData} />

      <FlashCardResponseMultiple mentaleFlashCardData={arrayData} />
    </>
  );
}

export default App;
