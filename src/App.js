import React, { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import "./App.css";
import { Typewriter } from "react-simple-typewriter";
import { Fireworks } from "fireworks-js";

function App() {
  const [showWish, setShowWish] = useState(false);
  const [showDecorations, setShowDecorations] = useState(false);

  const audioRef = useRef(null);
  const fwRef = useRef(null);
  const [width, height] = useWindowSize();

  const handleBoxClick = () => {
    setShowWish(true);
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio play error:", error);
      });
    }

    // Start decorations after 7 seconds
    setTimeout(() => {
      setShowDecorations(true);
    }, 7000);
  };

  useEffect(() => {
    if (showWish && fwRef.current) {
      const fireworks = new Fireworks(fwRef.current, {
        hue: { min: 0, max: 360 },
        delay: { min: 15, max: 30 },
        speed: 2,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        traceLength: 3,
        traceSpeed: 5,
        explosion: 5,
        autoresize: true,
      });
      fireworks.start();
    }
  }, [showWish]);

  return (
    <div className="container">
      {showDecorations && <Confetti width={width} height={height} />}
      <audio ref={audioRef} preload="auto">
        <source src="/bi-saraha.MP3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {!showWish ? (
        <div className="gift-section">
          {/* 👇 Finger Hint */}
          <div className="click-hint">👇</div>
          <div className="gift-box" onClick={handleBoxClick}></div>
        </div>
      ) : (
        <>
          <div ref={fwRef} className="fireworks-canvas"></div>
          <Confetti width={width} height={height} />
          <div className="wish-message">
            <h1>
              <Typewriter
                words={[
                  "🎉 Happy Birthday Best! 🎂",
                  "You’re amazing 💖",
                  "Let’s celebrate YOU! 🎈",
                ]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </h1>
            <p className="footer">
              Assalamualaikum <strong>Syed</strong>,<br />
              May your day sparkle with joy and your heart overflow with love.
              💖
              <br />
              Cheers to laughter, cake, and unforgettable memories! 🎈🥳
            </p>
            <p className="footer">— With love, your Buddy</p>
          </div>
        </>
      )}

      {/* Decorative hearts/stars */}
      {showDecorations && (
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
