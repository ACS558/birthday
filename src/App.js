import React, { useState, useRef } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import "./App.css";
import { Typewriter } from "react-simple-typewriter";
import { Fireworks } from "fireworks-js";

function App() {
  const [showWish, setShowWish] = useState(false);
  const audioRef = useRef(null);
  const fwRef = useRef(null);
  const [width, height] = useWindowSize();

  const handleBoxClick = () => {
    setShowWish(true);
    audioRef.current.play();

    const container = fwRef.current;
    if (container) {
      const fireworks = new Fireworks(container, {
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
  };

  return (
    <div className="container">
      {showWish && <Confetti width={width} height={height} />}
      <audio ref={audioRef} src="/happy-birthday.mp3" />

      {!showWish ? (
        <div className="gift-box" onClick={handleBoxClick}></div>
      ) : (
        <>
          <div ref={fwRef} className="fireworks-canvas"></div>
          <Confetti width={width} height={height} />
          <div className="wish-message">
            <h1>
              <Typewriter
                words={[
                  "🎉 Happy Birthday Bestie! 🎂",
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
            <p>
              Assalamualaikum <strong>Syed</strong>,<br />
              May your day sparkle with joy and your heart overflow with love.
              💖
              <br />
              You're not just my best – you're a true blessing in my life! 🌸
              <br />
              Cheers to laughter, cake, and unforgettable memories! 🎈🥳
            </p>
            <p className="footer">— With love, your forever best ❤️</p>
          </div>
        </>
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
