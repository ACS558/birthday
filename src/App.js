import React, { useState, useRef } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import "./App.css";

function App() {
  const [showWish, setShowWish] = useState(false);
  const audioRef = useRef(null);
  const [width, height] = useWindowSize();

  const handleBoxClick = () => {
    setShowWish(true);
    audioRef.current.play();
  };

  return (
    <div className="container">
      {showWish && <Confetti width={width} height={height} />}
      <audio ref={audioRef} src="/happy-birthday.mp3" />

      {!showWish ? (
        <div className="gift-box" onClick={handleBoxClick}></div>
      ) : (
        <div className="wish-message">
          <h1>🎉 Happy Birthday Bestie! 🎂</h1>
          <p>
            Assalamualaikum <strong>Syed</strong>,<br />
            May your day sparkle with joy and your heart overflow with love. 💖
            <br />
            You're not just my best – you're a true blessing in my life! 🌸
            <br />
            Cheers to laughter, cake, and unforgettable memories! 🎈🥳
          </p>
          <p className="footer">— With love, your forever best ❤️</p>
        </div>
      )}

      {/* Decorative hearts/stars */}
      {showWish && (
        <>
          <div className="floating heart"></div>
          <div className="floating star"></div>
          <div className="floating heart two"></div>
        </>
      )}
    </div>
  );
}

export default App;
