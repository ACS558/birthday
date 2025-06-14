import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import "./App.css";

function App() {
  const [width, height] = useWindowSize();

  return (
    <div className="container">
      <Confetti width={width} height={height} />
      <div className="gift-box"></div>
      <h1 className="title">🎉 Happy Birthday Bestie! 🎂</h1>
      <p className="message">
        Assalamualaikum <strong>Syed</strong>,<br />
        On this special day, I just want you to know how much you mean to me. 💖
        <br />
        You're more than a friend — you're my sister by heart. 💫
        <br />
        Wishing you joy, love, and endless smiles today and always! 🥳
        <br />
        Let's celebrate YOU! 🎈🎁
      </p>
      <p className="footer">— With love, Your Forever Best Friend ❤️</p>
    </div>
  );
}

export default App;
