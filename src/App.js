import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import "./App.css";

function App() {
  const [width, height] = useWindowSize();

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#ffe6f0",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <Confetti width={width} height={height} />
      <h1 style={{ fontSize: "3rem", color: "#d63384" }}>
        🎉 Happy Birthday Bestie! 🎂
      </h1>
      <p style={{ fontSize: "1.25rem", color: "#333", marginTop: "1rem" }}>
        Dear <strong>[Her Name]</strong>,<br />
        Wishing you a day filled with love, joy, and laughter! 💕
        <br />
        You’re the best, and I’m lucky to have you in my life. ✨<br />
        Enjoy your day to the fullest! 🎈🎁💖
      </p>
      <p style={{ marginTop: "2rem", fontStyle: "italic", color: "#c2185b" }}>
        — From your forever best friend 💌
      </p>
    </div>
  );
}

export default App;
